import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB0kK6Rk3xTkPtlsKLLvaf2HjuKfWJdeo4',
  authDomain: 'social-media-next.firebaseapp.com',
  projectId: 'social-media-next',
  storageBucket: 'social-media-next.appspot.com',
  messagingSenderId: '517202192419',
  appId: '1:517202192419:web:e587504e0f7c0toreb79876996',
  measurementId: 'G-Z40GSNLK37',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
