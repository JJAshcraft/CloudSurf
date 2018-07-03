 import firebase from 'firebase'

 // Initialize CloudSurf Firebase
 var config = {
  apiKey: "AIzaSyBqoreAPCcwQYcpgpft7tKXjncnxu5zJGo",
  authDomain: "theta-decker-209002.firebaseapp.com",
  databaseURL: "https://theta-decker-209002.firebaseio.com",
  projectId: "theta-decker-209002",
  storageBucket: "theta-decker-209002.appspot.com",
  messagingSenderId: "125399240902"
};






firebase.initializeApp(config);
export default firebase;