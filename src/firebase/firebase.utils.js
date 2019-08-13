import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBAb8xfhnG5OIxRmrtfzkCYnODVqxY7UsI",
  authDomain: "stylo-db.firebaseapp.com",
  databaseURL: "https://stylo-db.firebaseio.com",
  projectId: "stylo-db",
  storageBucket: "",
  messagingSenderId: "320274611871",
  appId: "1:320274611871:web:a7ed66fbcbb36794"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;