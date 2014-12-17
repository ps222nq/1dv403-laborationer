"use strict";

window.onload = function() {

	var MessageBoard = {

		messages: [],

		init:function()
		{
			var send = document.getElementById("send");
			var text = document.getElementById("text");

			text.addEventListener("keypress", function(e){

				if(!e) {
					e = window.event;
				} else if (e.keyCode == 13 && !e.shiftKey){
					e.preventDefault();
					MessageBoard.getMessages();
				}
			}
			);

			send.onclick = MessageBoard.getMessages();

		},

		getMessages: function() {
			var text = document.getElementById("text");

				if (text.value != ""){

				MessageBoard.messages.push(new Message(text.value, new Date()));
				MessageBoard.renderMessage(MessageBoard.messages.length -1);

				//reset message input field when message is sent
				text.value = "";
			}

		},

		renderMessage: function(msgID) {

			var removeLink = "<a href='#' id='removeLink" + msgID + "' class='removeLink'>Ta bort</a>";
			var timeLink = "<a href='#' id='timeLink" + msgID + "' class='timeLink'>Tid</a>";


			var msgBody = document.createElement("article");
			msgBody.setAttribute("class", "msgBody");
			msgBody.innerHTML = MessageBoard.messages[msgID].getHTMLText() + "   " + removeLink +"    " + timeLink;
			document.getElementById("messageArea").appendChild(msgBody);

				//Working around issue with selecting by ID vs. only one element can have certain ID
				var deletebutton = document.getElementById("removeLink" + msgID);
				
				deletebutton.onclick = function(e){
				e.preventDefault();
				if(confirm("Radera meddelandet?") == true){
					MessageBoard.removeMessage(msgID);
					}
				}

				var timebutton = document.getElementById("timeLink" + msgID);
				timebutton.onclick = function(e){
					e.preventDefault();
					alert(MessageBoard.messages[msgID].toString());
				}

			MessageBoard.msgCount();
			MessageBoard.scrollDown();




		},

		renderAll: function() {
			//reset field where messages are displayed
			document.getElementById("messageArea").innerHTML ="";

			//loop through array holding messages and display them
			for(var i=0; i < MessageBoard.messages.length; i++){
				MessageBoard.renderMessage(i);
			}
		},

		removeMessage: function(msgID) {
			MessageBoard.messages.splice(msgID, 1);
			MessageBoard.renderAll();

			//update message count to reflect deletion of message
			MessageBoard.msgCount();
		},

		msgCount: function() {
			document.getElementById("msgCount").innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
		},

		scrollDown: function() {
			document.getElementById("messageArea").scrollTop = document.getElementById("messageArea").scrollHeight;
		}
	}

	window.onload = MessageBoard.init();
}