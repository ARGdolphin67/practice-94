var firebaseConfig = {
    apiKey: "AIzaSyAM3R3P56--UYg0HEdGc1Dz6FgMrq837pc",
    authDomain: "kwitter-e7d56.firebaseapp.com",
    databaseURL: "https://kwitter-e7d56-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7d56",
    storageBucket: "kwitter-e7d56.appspot.com",
    messagingSenderId: "686633475578",
    appId: "1:686633475578:web:8e7a3147f90e0021fc5843"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
 }