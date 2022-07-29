// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyB3BgfS5PGncpQyMq9gkiKmKf05_a9spzo",
    authDomain: "lets-chat-web-app-60ad5.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-60ad5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-60ad5",
    storageBucket: "lets-chat-web-app-60ad5.appspot.com",
    messagingSenderId: "871162839626",
    appId: "1:871162839626:web:266cb6c1468c79fb37dcb3",
    measurementId: "G-TJ8C1ZZYMW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

    apiKey: "AIzaSyAb9UVfPMShfAc5V6WDlFK2NhBnLsS8FeU"
    