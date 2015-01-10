// Gabe Harms
// This page handles all events that occur on the Login.html page

// Get text fields
var userNameField = document.getElementById("Username");
var passwordField = document.getElementById("Password");

// Set initail value of the text fields
userNameField.value = "your email";
passwordField.value = "password";

// The following 4 functions are resonsible for placing/removing
// text from the text fields when they are inactive
userNameField.onblur = function () {
	
	if (userNameField.value == "") {
		userNameField.style.background = "#e4d5c3";
		userNameField.style.color = "#c9b7a2";
		userNameField.value = "your email";
	}
	else
	{
		userNameField.style.background = "#fff";
		userNameField.style.color = "#725129";
	}

}

userNameField.onfocus = function () {
	
	if (userNameField.value == "your email") {
		
		userNameField.value = "";
	}

	userNameField.style.background = "#fff";
	userNameField.style.color = "#725129";	

}

passwordField.onblur = function () {
	
	
	if (passwordField.value == "") {
		passwordField.style.background = "#e4d5c3";
		passwordField.style.color = "#c9b7a2";
		passwordField.value = "password";
	}
	else
	{
		passwordField.style.background = "#fff";
		passwordField.style.color = "#725129";
	}
	
}

passwordField.onfocus = function () {
	
	if (passwordField.value == "password")
		passwordField.value = "";
	
	passwordField.style.background = "#fff";
	passwordField.style.color = "#725129";

}

// This event handler is responsible for 
// checking if username and password is valid
document.getElementById("form").onsubmit = function() {
	document.getElementById("errorMessage").style.opacity = 0;
	if (passwordField.value == "password")
	{
		document.getElementById("errorMessage").innerHTML = "Password field is empty";
		document.getElementById("errorMessage").style.opacity = 1;
		return false;
	}
	else if ( userNameField.value == "your email")
	{
		document.getElementById("errorMessage").innerHTML = "Invalid Username";
		document.getElementById("errorMessage").style.opacity = 1;
		return false;
	}
	else
	{	
		document.getElementById("errorMessage").style.opacity = 0;
		return true;
	} 
}

// Event listener on home button
var homeButton = document.getElementById("home_button");
homeButton.onclick = function () {
	window.open("Homepage.html", "_self");	
}







