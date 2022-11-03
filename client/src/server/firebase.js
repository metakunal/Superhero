import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBwGhq10JEY3fFdBqXD--XryoDjtgWhvZ4", // Add API Key
  databaseURL: "https://vidmeet-ff744-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
//Checking if the room ID is already there.
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
