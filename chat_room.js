//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBiBNQdYhpm8z4dvs7fY2h1TNuV0OuBKio",
    authDomain: "kwitterbase-a877f.firebaseapp.com",
    databaseURL: "https://kwitterbase-a877f-default-rtdb.firebaseio.com",
    projectId: "kwitterbase-a877f",
    storageBucket: "kwitterbase-a877f.appspot.com",
    messagingSenderId: "782050016241",
    appId: "1:782050016241:web:0ccbd6d75923996ccfe250",
    measurementId: "G-2FJF07CDTV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();




function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}



function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}