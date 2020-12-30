import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0pgnyYoCZVptsaEjw8vGqLgdRf_lbOYQ",
    authDomain: "ecomreact-db.firebaseapp.com",
    projectId: "ecomreact-db",
    storageBucket: "ecomreact-db.appspot.com",
    messagingSenderId: "780567033040",
    appId: "1:780567033040:web:e83302c0008080a8b31ad5",
    measurementId: "G-ZMRPYPD9W8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;