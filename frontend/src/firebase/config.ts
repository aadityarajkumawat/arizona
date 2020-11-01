import firebase from "firebase";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyDgF1XBFJmwc07OiJF3CSW3Gcu3d3ey3oc",
  authDomain: "estore-a6fcb.firebaseapp.com",
  databaseURL: "https://estore-a6fcb.firebaseio.com",
  projectId: "estore-a6fcb",
  storageBucket: "estore-a6fcb.appspot.com",
  messagingSenderId: "518606967242",
  appId: "1:518606967242:web:94ea023e355f8bc3f4bf33",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };
