
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDfs1Fdy2HXuwcrJtDh1JFaNY2DW_yGpUM",
  authDomain: "logiout-3b464.firebaseapp.com",
  databaseURL: "https://logiout-3b464.firebaseio.com",
  projectId: "logiout-3b464",
  storageBucket: "logiout-3b464.appspot.com",
  messagingSenderId: "936581999872",
  appId: "1:936581999872:web:98976c8d8f5b6d28b417e5",
  measurementId: "G-PQ2KJR9E8D"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
