"use strict";

$(document).ready(function(){
		console.log("Contact Page");
});

$("#form_submit").click(function(){
	var contactName = $("#name_box").val();
	var email = $("#email_box").val();
	var phoneNumber = $("#phone_number").val();
	var textSpace = $("#text_space").val();

	console.log("contactName: " + contactName);
	console.log("email: " + email);
	console.log("phoneNumber: " + phoneNumber);
	console.log("textSpace: " + textSpace);
});

// IIFE
function replaceContent() {
	console.log("App started");
		var introduction;
		var my_project1;
		var my_project2;
		var my_project3;
		var contact_me;

			introduction = document.getElementById("introduction");

			if (introduction != null) {
				introduction = document.getElementById("introduction");
				introduction.innerHTML = "My name is Jacob Gittings. I am a Web Developer from Barrie, Ontaio. My goal is to develop, provide, and maintain web solutions for the future.";
				introduction.innerHTML = "I am currently an IWDD (Interactive Web Development & Design) student at Georgian College. My goal is to provide well crafted and well supported web solutions.";
			};

			if (introduction == null) {
			my_project1 = document.getElementById("my_project1");

				if (my_project1 != null) {
				my_project1.innerHTML = "The object of this project was to create a multi-page site with a functioning nav bar. I also made it as responsive as I was able to at the time.";

				my_project2 = document.getElementById("my_project2");
				my_project2.innerHTML = "This project was done with pseudo code, a fake computing language which helps with planning a project.";

				my_project3 = document.getElementById("my_project3");
				my_project3.innerHTML = "";
				}

				if (my_project1 == null) {
					contact_me = document.getElementById("contact_me");
					contact_me.innerHTML = "Feel free to send me a message";
				}}};
replaceContent();

/*function contactUpdate() {
	var contactName;
	var eMail;
	var phoneNumber;
	var textSpace;
	submitButton.pre
	
	contactName = document.getElementsById("contactName");
	eMail = document.getElementsById("eMail");
	phoneNumber = document.getElementsById("phoneNumber");
	textSpace = document.getElementsById("textSpace");
	
	submitButton.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("contactName: " + contactName.value);
		console.log("eMail: " + eMail.vaule);
		console.log("phoneNumber: " + phoneNumber.vaule);
	});
};
contactUpdate();*/
