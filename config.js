import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMmowm1C2WtBmrazvSIZoxGrRNlTM15r0",
  authDomain: "quest-d149c.firebaseapp.com",
  databaseURL: "https://quest-d149c-default-rtdb.firebaseio.com",
  projectId: "quest-d149c",
  storageBucket: "quest-d149c.appspot.com",
  messagingSenderId: "888032630366",
  appId: "1:888032630366:web:387c24498f3efee57c86cf",
  measurementId: "G-4LE2MWERRB"
};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();