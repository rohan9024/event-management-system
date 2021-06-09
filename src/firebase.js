import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAvP5LIyqwpHjsb5F7nHZb-Jnoyk3aHxgc",
    authDomain: "event-management-bb38b.firebaseapp.com",
    projectId: "event-management-bb38b",
    storageBucket: "event-management-bb38b.appspot.com",
    messagingSenderId: "1003139139805",
    appId: "1:1003139139805:web:1111f7b735e1213b25f334",
    measurementId: "G-7M8R5WKT69"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;