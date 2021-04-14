//1
const foo = 68;
const goo = 6;
const koo = 89
if ((foo >= 50 && foo <= 99) || (goo>= 50 && goo<= 99) || (koo>=50 && koo<=99)) {
  console.log(true);

} else {
   console.log(false); 
}

//2
const boo= 68;
const doo = 6;
const roo = 89
if ((boo >= 50 && boo <= 99) || (doo>= 50 && doo<= 99) || (roo>=50 && roo<=99)) {
  console.log(true);

} else {
   console.log( false); 
}
 

//3
const a = 3;
const b = 88;
const c = 16;
console.log(Math.max(a,b,c));
console.log(Math.min(a,b,c));

//4 
const hope = "py";
const hope2 = "thon";
if (hope === "py") {
    console.log(hope.concat(hope2));

} else {
    console.log("nope");
}

//5
const ban = 4;
const kal = 50;
const result = ban + kal;
console.log (result);
if (result>= 50 && result<=80){
    console.log(65);
} else{
console.log(80);
}
//6 
const op = 5;
const al = 3;
if(op + al === 8 || op - al ===8) {
    console.log(true);
} 

//7
if((op === 15 || al === 15) || (op + al === 15)) {
    console.log(true)
}else
{
    console.log("nope");
}
//8
if (op % 7 === 0 || op % 11 ===0 || al % 7 === 0 || al % 11 ===0) {
console.log(true);
}else{
console.log(false);
} 

//9
// console.log
(op+al);
if(op === al) {
    console.log((op + al) * 3);
}

//10 
const specified = 40;
const diffrent = specified - 19;
if(specified > 19) {
console.log(diffrent * 2);
}

//11 BONUS
const firstName = "karin"
const age = 26

if( age < 13){
    console.log(firstName + " is a child");
}
else if (age >= 13 && age < 20) { 
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30)
{
console.log(firstName + " is a young adult");
} else {
    console.log(firstName + " is a adult");
}





