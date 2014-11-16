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
				if(year % 4 === 0){var nextLeapYear = year;}
			}
		}

		if(isNaN(aBirthday)){
		throw new Error("Fel. Vänligen mata in ett giltigt födelsedatum enligt format åååå/mm/dd.");
		} //JS kollar redan om datumet finns, så skottår tas hand om

		if(aBirthday > today){

			throw new Error("Mata in ett datum innan dagens datum enligt format åååå/mm/dd.")

		}else{

				var nextBirthday = new Date(today.getFullYear(), aBirthday.getMonth(), aBirthday.getDate());
				if(aBirthday.getDate() == 29 && aBirthday.getMonth() == 1 && aBirthday.getFullYear() % 4 == 0){
					var nextBirthday = new Date(nextLeapYear, aBirthday.getMonth(), aBirthday.getDate());
				}
				
				if(isNaN(nextBirthday)){
					throw new Error("Fel. Vänligen mata in ett giltigt födelsedatum enligt format åååå/mm/dd.");
				}else{

					if (today > nextBirthday){
						nextBirthday.setFullYear(today.getFullYear() + 1);
					}
				}
		}
		numberOfDays = Math.ceil((nextBirthday - today) / (1000*60*60*24)); //Math.ceil gör att den inte avrundar mitt på dagen.

		numberOfDays = numberOfDays === 365 ? 0 : numberOfDays;

		return numberOfDays;

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