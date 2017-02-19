/*Ese 346 Project 1
Frank Yee 109374525*/

var Test = true;
if(Test){
	console.log('Hello world');
}
else{}

var rand = Math.random();
var slots = 5;
var count = 0;
var array = [];

while(count<slots+1){
var rand = Math.random();
array.push(rand)
count++;
}

console.log(array)