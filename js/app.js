$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});

function check(){
	if (document.getElementById("FirstName").length < 1){
		var firstName = document.getElementById("firstNameError");
		firstName.style.display = 'block';
	};
	if (document.getElementById("Surname").length < 1){
		var surname = document.getElementById("surnameError");
		surname.style.display = 'block';		
	};
	if (document.getElementById("Email").length < 1){
		var email = document.getElementById("emailError");
		email.style.display = 'block';	
	};
	if (document.getElementById("Password").length < 8){
		var passwordStr = document.getElementById("passwordError");
		passwordStr.style.display = 'block';		
	};
	if (document.getElementById("Password2").length < 8){
		var passwordStr2 = document.getElementById("password2Error");
		passwordStr2.style.display = 'block';
	};
};