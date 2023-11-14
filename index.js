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

let amountPerPerson = bill/people;
}