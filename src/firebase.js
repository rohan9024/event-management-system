import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwXsZhgpXYEAqel0zHwvQf-rureQjm2wE",
    authDomain: "event-management-c33fe.firebaseapp.com",
    projectId: "event-management-c33fe",
    storageBucket: "event-management-c33fe.appspot.com",
    messagingSenderId: "730774986682",
    appId: "1:730774986682:web:58ea3b0aa9beb1042ec783",
    measurementId: "G-3158LM0SNB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;

