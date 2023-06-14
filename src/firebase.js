import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1R5vSHLINC-KSEh5gV2jWcX0S8Akw7tA",
    authDomain: "react-hooks-blog-89b01.firebaseapp.com",
    projectId: "react-hooks-blog-89b01",
    storageBucket: "react-hooks-blog-89b01.appspot.com",
    messagingSenderId: "498333239440",
    appId: "1:498333239440:web:8f6fd6ad5444d6e4117015"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export default firebase;
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();