import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBao2zSHzuJjceQwC8nzjtwm8EX3FavTkk',
  authDomain: 'blog-bcc79.firebaseapp.com',
  projectId: 'blog-bcc79',
  storageBucket: 'blog-bcc79.appspot.com',
  messagingSenderId: '351500158690',
  appId: '1:351500158690:web:26f3b3ddd92a903ebbc0bb',
  measurementId: 'G-WYX78KSZ53',
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export default firebase;
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
