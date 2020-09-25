  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBZQJYHh9x-j1cChTGXeim09IcVjRKqpD8",
      authDomain: "survey-database-78dfa.firebaseapp.com",
      databaseURL: "https://survey-database-78dfa.firebaseio.com",
      projectId: "survey-database-78dfa",
      storageBucket: "survey-database-78dfa.appspot.com",
      messagingSenderId: "414471761345",
      appId: "1:414471761345:web:06e5fee2292c3651c81340",
      measurementId: "G-275XP1VRPV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("username");
document.getElementById("Username").innerHTML="WELCOME "+username+"!!";

    function addroom()
      {
      roomname_input=document.getElementById("roomname_input").value;
      firebase.database().ref("/").child(roomname_input).update({
      purpose: "A NEW ROOM HAS BEEN ADDED TO DVITTER"      
      });
      localStorage.setItem("roomname",roomname_input);
      window.location="kwitter_page.html";      
      }

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" +Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log("name");
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";      
}


function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";  
}