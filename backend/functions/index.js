const admin = require("firebase-admin");
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

const auth = admin.auth();
const usersDB = admin.firestore().collection('Users');

// Create a root reference
const storageRef = firebase.storage().ref();

const stream = require('stream');

// const auth = require('./src/auth.js');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Obviamente criamos o projeto!");
});

exports.auth = functions.https.onRequest(async (req, res) => {
    const { email, password, username, bio, locate, photoBase64, areasDeInteresse } = req.body;

    const user = await auth.createUser({
        email,
        password,
        username,
    });
    
    storageRef.bucket('gs://studyhub-9f612.appspot.com/userPhotos')

    usersDB.doc(user.uid).set({
        bio,
        locate,
        areasDeInteresse
    })

    res.json(user.uid)
});