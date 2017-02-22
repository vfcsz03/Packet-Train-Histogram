/*Frank Yee 109374525 Ese346
Packet Train*/

var rand = Math.random();
var maxSlots = 100000;
var slot = 0;
var array = [];
var i = 0;
for ( i = 0; i<maxSlots; i++){
  array.push(0);
}

var train = [];
var boole=[];
var count = 0;
var length= 0; //Train length

var th1 = 0.2;
var th2 = 0.5;
var th3 = 0.9;

console.log('new')

while (slot < maxSlots) {
  rand = Math.random();
  train.push(rand);
  if (rand <= th3 && rand>0) {
    count++;
    boole.push('TRUE');
  } else {
    array[count]++;
    boole.push('FALSE');
    count = 0;
  }
  slot++;
 }
for (i = 0; i <maxSlots; i++) { 
  if(array[i]!==0)
  console.log("train " + i + ": " + array[i]);
}

//console.log(train);
//console.log(boole);