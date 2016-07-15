var email = document.getElementById("email");
var pwd = document.getElementById("password");

function store() {
	localStorage.setItem("email", email.value);
	localStorage.setItem("pwd", pwd.value);
}

function check() {
    var storedEmail = localStorage.getItem("email");
    var storedPwd = localStorage.getItem("pwd");

    var typedEmail = document.getElementById("email");
    var typedPwd = document.getElementById("password");
	
    if(userName.value == storedName && userPw.value == storedPw) {
        alert("You are logged in.");
    }else {
		alert("ERROR")
    }
}

$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});