"use strict";

var makePerson = function(persArr){
//vars needed

//extract names and ages from persArr
var ages = persArr.map(function(age){return age.age;});
ages.sort();
var names = persArr.map(function(name){return name.name;});
names.sort();

//debug
console.log(ages[0]);
console.log(ages[1]);
console.log(ages[2]);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//calculate minage, maxage, averageage, create names string

var minAge = ages[0];
var maxAge = ages[ages.length - 1];
var averageAge = Math.round((ages.reduce(function(a,b){return a + b;})) / ages.length);

//debug
console.log("min " + minAge);
console.log("max " + maxAge);
console.log("avg " + averageAge);

//return object containing minAge int, maxAge int, averageAge int, names string sep by ", " and a-z sorted


}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);