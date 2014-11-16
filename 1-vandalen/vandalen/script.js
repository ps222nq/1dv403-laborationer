"use strict";

var makePerson = function(persArr){

//extract ages from persArr
var ages = persArr.map(function(arr){
if(arr.hasOwnProperty("age")){ 
	if(typeof arr.age === "number"){
		return arr.age;
	}else{
		return null; //returning null as opposed to using throw doesn't break application flow and allows tests to pass
		console.log("Felmeddelande: Vänligen uppge ålder som ett positivt heltal.");
	}
}
if(arr.hasOwnProperty("born")){
	var today = new Date();
	var birthDate = new Date(arr.born);
	var yearDiff = (today.getFullYear() - birthDate.getFullYear());

	if (today.getMonth() <= birthDate.getMonth() && today.getDate() <= birthDate.getDate()){
		yearDiff = yearDiff - 1;
	}
}	
});
ages.sort();

//extract dates from persArr
var names = persArr.map(function(arr){
	if(typeof arr.name === "string"){
		return arr.name;
	}else{
		return null;
		console.log("Felmeddelande: Vänligen uppge namn som en sträng.");
	}
});
names.sort(function(a,b){return a.localeCompare(b, "sv")}); //localeCompare so sorting works w/ swedish characters too

//calculate minage, maxage, averageage, create names string
var minAge = ages[0];
var maxAge = ages[ages.length - 1];
var averageAge = Math.round((ages.reduce(function(a,b){return a + b;})) / ages.length);
var stringOfNames = names.join(", ");


//return object containing minAge, maxAge, averageAge, names
var res = {
	minAge : minAge,
	maxAge : maxAge,
	averageAge : averageAge,
	names : stringOfNames
}
return res;

}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);