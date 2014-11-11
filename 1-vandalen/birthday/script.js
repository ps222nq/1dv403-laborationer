"use strict";

window.onload = function(){

	
	var birthday = function(date){

		var numberOfDays;

		var aBirthday = new Date(date);
		var today = new Date();
		
		//if birthday is after today || birthday is NaN, throw error

		//else execute code:

			//set birtday year to this year, if current date is after this years birthday year +1

			//numberofDays = Math.floor((birthday - today) / (1000*60*60*24))

			//use tertiary operator to check if numberofdays is 365, in that case return 0, else return numberofDays




		







	
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};