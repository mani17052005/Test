function signup(){
const email=document.getElementById("email").value;
if(!email){alert("Enter email");return;}
localStorage.setItem("user",email);
location.href="dashboard.html";
}