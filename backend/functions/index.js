const admin = require("firebase-admin");
const functions = require('firebase-functions');

const firebase = require('firebase')


admin.initializeApp(functions.config().firebase);
firebase.initializeApp(admin.credential)

const auth = admin.auth();
const usersDB = admin.firestore().collection('Users');
const groupsDB = admin.firestore().collection('Groups');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("StudyHub na área!");
});

exports.createUser = functions.https.onRequest(async (req, res) => {
    const { email, password, username, bio, locate, photoBase64, areasDeInteresse } = req.body;

    try {
        const user = await auth.createUser({
            email,
            password,
            username,
        });

        usersDB.doc(user.uid).set({
            bio,
            locate,
            areasDeInteresse,
            photoBase64
        })

        res.json(user.uid)
    } catch (error) {
        res.json(error);
    }

});

exports.getUserData = functions.https.onRequest(async (req, res) => {
    const { uid } = req.body;

    res.json((await usersDB.doc(uid).get()).data());
});

exports.checkEmailExists = functions.https.onRequest(async (req, res) => {
    try {
        const users = await auth.getUserByEmail(req.body.email);
        res.json({ "exist": true });
    } catch (error) {
        res.json({ "exist": false });
    }
});

exports.updateUser = functions.https.onRequest(async (req, res) => {
    const data = req.body;
    const uid = req.headers.uid;

    await usersDB.doc(uid).update(data).then(() => {
        res.statusCode(200);
    }).catch((e) => {
        res.json(e);
    });
});

exports.deleteUser = functions.https.onRequest(async (req, res) => {
    const { uid } = req.body;

    await auth.deleteUser(uid).then(async () => {
        // apagar dos grupos
        await usersDB.doc(uid).delete();
        res.statusCode(200)
    }).catch((e) => {
        res.json(e)
    })
})

exports.createGrupo = functions.https.onRequest(async (req, res) => {
    const { nome, bio, admin, locate, private, areasDeInteresse, photoBase64 } = req.body;

    await groupsDB.add({
        nome,
        bio,
        admin,
        locate,
        private,
        areasDeInteresse,
        photoBase64,
        "participantes": [admin]
    }).then((snapshot) => {
        groupsDB.doc(snapshot.id).update({ "code": `${admin.slice(0, 3)}${snapshot.id.slice(0, 3)}` })
        res.json(snapshot.id);
    }).catch((e) => {
        res.json(e);
    });
})

exports.updateGroups = functions.https.onRequest(async (req, res) => {
    const data = req.body;
    const id_group = req.headers.id;

    await groupsDB.doc(id_group).update(data).then(() => {
        res.statusCode(200);
    }).catch((e) => {
        res.json(e);
    });
})

exports.deleteGroup = functions.https.onRequest(async (req, res) => {
    const { id } = req.body;

    await groupsDB.doc(id).delete().then(() => {
        res.statusCode(200);
    }).catch((e) => {
        res.json(e);
    })
})

exports.getGroupByCode = functions.https.onRequest(async (req, res) => {
    const { code } = req.body;

    await groupsDB.where('code', '==', code).get().then((snapshots) => {
        snapshots.forEach(doc => {
            res.json(doc.data())
            // console.log(doc.id)//, '=>', doc.data());
        });
    }).catch((e) => {
        res.json(e);
    })
})

// exports.searchGroupsByName = functions.https.onRequest(async (req, res) => {
//     const { name } = req.body;

//     await groupsDB.where()
// });

// exports.login = functions.https.onRequest(async (req, res) => {
//     const { email, password } = req.body;
//     auth.getUserByEmail
//     res.json(firebase.auth().signInWithEmailAndPassword(email, password));
// })

