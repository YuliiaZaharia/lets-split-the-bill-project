const calculate = document.querySelector("#btn"); 
calculate.addEventListener("click", calculateAmount);

function calculateAmount(e) {
e.preventDefault();
const bill = document.querySelector("#bill").value; 
const people = document.querySelector("#people").value;
const tip = document.querySelector("#tip").value;

if (bill === "" || people === "") {
    alert("Error!");
}

// How much 1 person paid
let amountPerPerson = bill/people;

// How much 1 person will pay tips
let tipPerPerson = (bill * tip) / people; 

// total amount of bill per person 
let totalSum = amountPerPerson + tipPerPerson;

document.querySelector("#dividedBill").textContent = amountPerPerson; 
document.querySelector("#dividedTips").textContent = tipPerPerson;
document.querySelector("totalBill").textContent = totalSum; 
}