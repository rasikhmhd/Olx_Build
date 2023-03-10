import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import  'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAxguB6bIqyXaaGI3gKDtDElhXv8P5tHfE",
    authDomain: "olx-clone-3a0fa.firebaseapp.com",
    projectId: "olx-clone-3a0fa",
    storageBucket: "olx-clone-3a0fa.appspot.com",
    messagingSenderId: "10608023055",
    appId: "1:10608023055:web:e0087db488b2d1a6adf57a"
  };

export  default firebase.initializeApp(firebaseConfig)