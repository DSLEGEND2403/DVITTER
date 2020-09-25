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
    roomname=localStorage.getItem("roomname")

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(message_data);
         console.log(firebase_message_id);         
         name = message_data['name'];  
         message = message_data['message'];  
         like = message_data['like']; 
         name_with_tag ="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag ="<h4 class='message_h4'> "+ message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";  
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
         
      } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button-" + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log("updated_likes");

firebase.database().ref(roomname).child(message_id).update({
like:updated_likes  
});
}

function LOGOUT()
{
alert ("WE ARE LOGGING YOU OUT USER");
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";      
}

function Send()
{
console.log("Send")      
msg=document.getElementById("SendText").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
like:0
});  
document.getElementById("SendText").value="";
}
