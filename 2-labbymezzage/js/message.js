"use strict";

window.onload = function() {



	var MessageBoard = {

		messages: [],

		init:function(e)
		{
			var mess = new Message("Testmeddelande", new Date());
			alert(mess);
			alert(mess.getText());
			mess.setText("Ändrad testmeddelande");
			alert(mess);
		},

		
	}
}