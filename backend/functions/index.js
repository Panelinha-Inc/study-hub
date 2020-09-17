const admin = require("firebase-admin");
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

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