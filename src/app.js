import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


let who=['My grandma ', 'My dog ', 'My bird ','The mailman ','My cat '];
let action=['broke ', 'ate ','crushed ','destroyed ','spilled milk '];
let what=['my car ','my phone ','my homework ','in the kitchen '];
let when=['before class started.','when i was sleeping.','while i was exercising.','during my lunch.']

let selectedWho =(Math.floor(Math.random()*who.length))
let selectedAction =(Math.floor(Math.random()*action.length))
let selectedWhat =(Math.floor(Math.random()*what.length))
let selectedWhen =(Math.floor(Math.random()*when.length))



let statement= who[selectedWho] + action[selectedAction] + what[selectedWhat] + when[selectedWhen];

console.log(statement);

let htmlStatement = document.querySelector('.excuse');
htmlStatement.innerHTML = statement;
};
