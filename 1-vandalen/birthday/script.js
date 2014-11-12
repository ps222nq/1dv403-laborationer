"use strict";

window.onload = function(){

	
	var birthday = function(date){

		var numberOfDays;
		var aBirthday = new Date(date);
		var today = new Date();

		//calculate next leap year
		if(aBirthday.getFullYear() % 4 === 0) {
			var thisYear = today.getFullYear();
			var leapInterval = thisYear + 4;
			for(var year = thisYear; year  < leapInterval; year++){
				if(year % 4 === 0){var nextLeapYear = year;
					console.log(nextLeapYear);}
			}
		}

		if(aBirthday > today){

			throw new Error("Mata in ett datum innan dagens datum enligt format åååå/mm/dd.")

		}else{

			if(nextLeapYear){
				aBirthday.setFullYear(nextLeapYear);
			}else{
				aBirthday.setFullYear(today.getFullYear());
			}

			if (today > aBirthday){
				aBirthday.setFullYear(today.getFullYear() + 1);
			}



			numberOfDays = Math.floor((aBirthday - today) / (1000*60*60*24));

			numberOfDays === 365 ? numberOfDays = 0 : numberOfDays = numberOfDays;

			return numberOfDays;

		}

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