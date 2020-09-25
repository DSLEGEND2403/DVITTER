function add_user()
{
username=document.getElementById("username").value;
localStorage.setItem("username",username);
window.location="kwitter_room.html"    
}