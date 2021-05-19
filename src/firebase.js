import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3x6JtvYsNTdLw1XcQ_gKFx8pbtxxbiE8",
    authDomain: "linkedin-clone-54d1f.firebaseapp.com",
    projectId: "linkedin-clone-54d1f",
    storageBucket: "linkedin-clone-54d1f.appspot.com",
    messagingSenderId: "739360307019",
    appId: "1:739360307019:web:8b820c95def915aa3d5ace"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };