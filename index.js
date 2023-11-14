const calculate = document.querySelector("#btn"); 
calculate.addEventListener("click", calculateAmount);
const buttonTip = document.querySelector("#addTip"); 
buttonTip.addEventListener("click", showTip); 

function showTip(e) {
e.preventDefault;
tip.style.display = "block"; 
}

function calculateAmount(e) {
e.preventDefault();
const bill = document.querySelector("#bill").value; 
const people = document.querySelector("#people").value;
const tip = document.querySelector("#tip").value;

if (bill === "" || people === "" || people < 1) {
    Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please enter your information",
      })
}

// How much 1 person paid
let amountPerPerson = bill / people;

// How much 1 person will pay tips
let tipPerPerson = (bill * tip) / people; 

// total amount of bill per person 
let totalSum = amountPerPerson + tipPerPerson;

// toFixed()
amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2); 

// Showing results in app 
document.querySelector("#dividedBill").textContent = amountPerPerson; 
document.querySelector("#dividedTips").textContent = tipPerPerson;
document.querySelector("#totalBill").textContent = totalSum; 
}