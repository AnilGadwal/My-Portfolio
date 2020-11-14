import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCApUMowmcuSyJX_Djj7Wo0-wa4K0_EZ4g",
    authDomain: "my-portfolio-76ddd.firebaseapp.com",
    databaseURL: "https://my-portfolio-76ddd.firebaseio.com",
    projectId: "my-portfolio-76ddd",
    storageBucket: "my-portfolio-76ddd.appspot.com",
    messagingSenderId: "445481335371",
    appId: "1:445481335371:web:4009d8ca45360ac70cebce",
    measurementId: "G-5RYXGTEZ85"
})

var db = firebaseApp.firestore();

export { db };
