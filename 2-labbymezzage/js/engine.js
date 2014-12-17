"use strict";

function Message(message, date){

	this.getText = function(){
		return message;
	}

	this.setText = function(_text){
		message = _text;
	}

	this.getDate = function(){
		return date;
	}

	this.setDate = function(){
		date = _date;
	}

	Message.prototype.toString = function(){
		return this.getText() + " (" + this.getDate() + ")";
	}

	Message.prototype.getHTMLText = function() {
		return "<p>" + this.getText().replace(/ \n /g, "<br />") + "</p>";
	}

	Message.prototype.getTimeText = function (messageDate) {
		var hour = this.getDate().getHours();
		var minutes = this.getDate().getMinutes();
		var seconds = this.getDate().getSeconds();

		return hour + ":" + minutes + ":" + seconds;
	}

	Message.prototype.getDateTime = function (messageDate) {
		var date = this.getDate().toLocaleDateString();

		return "Skapades: " + date + " " + getTimeText();
	}

}