import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFyoUFDZAcNtDVKmH8XFHtQUXqP-jPxmk",
    authDomain: "fp-db-ac4d0.firebaseapp.com",
    projectId: "fp-db-ac4d0",
    storageBucket: "fp-db-ac4d0.appspot.com",
    messagingSenderId: "226823681552",
    appId: "1:226823681552:web:015a678c950fff2dc4fc95",
    measurementId: "G-83J2VVGNVR"
  };

  firebase.initializeApp(config);
