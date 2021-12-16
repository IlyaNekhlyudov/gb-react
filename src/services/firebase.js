import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCNJC6zwRX_lINa7_MttkhSrsxvsTbCQj4",
    authDomain: "reactgb-29bb9.firebaseapp.com",
    projectId: "reactgb-29bb9",
    storageBucket: "reactgb-29bb9.appspot.com",
    messagingSenderId: "687146556959",
    appId: "1:687146556959:web:5b0022687e9b81cc977f2a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.database();

const firebaseData = {
    auth,
    db
}

export default firebaseData;