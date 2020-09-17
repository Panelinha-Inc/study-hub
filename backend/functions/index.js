const admin = require("firebase-admin");
const functions = require('firebase-functions');

const firebase = require('firebase')


admin.initializeApp(functions.config().firebase);
firebase.initializeApp(admin.credential)

const auth = admin.auth();
const usersDB = admin.firestore().collection('Users');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("StudyHub na área!");
});

exports.createUser = functions.https.onRequest(async (req, res) => {
    const { email, password, username, bio, locate, photoBase64, areasDeInteresse } = req.body;

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
});

exports.getUserData = functions.https.onRequest(async (req, res) => {
    const { uid } = req.body;

    res.json((await usersDB.doc(uid).get()).data());
})

// exports.login = functions.https.onRequest(async (req, res) => {
//     const { email, password } = req.body;
//     auth.getUserByEmail
//     res.json(firebase.auth().signInWithEmailAndPassword(email, password));
// })

