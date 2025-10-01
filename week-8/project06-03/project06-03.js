"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Shannon Kueneke
      Date: September 30, 2025

      Filename: project06-03.js
*/
"use strict";

let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

//Copies shipping fields to corresponding billing fields
function copyShippingToBilling() {
  //if useShip is checked
  if (useShip.checked) {
    //copy values for all text inputs
    /*let shippingInputs = document.querySelectorAll("#shipping input[type='text']");
    let billingInputs = document.querySelectorAll("#billing input[type='text']");
    for (let i=0; i<shippingInputs.length; i++) {
      billingInputs[i].value = shippingInputs[i].value;
    }*/

    document.forms.billShip.elements.firstnameBill.value = document.forms.billShip.forms.elements.firstnameShip.value;
    document.forms.billShip.elements.lastnameBill.value = document.forms.billShip.elements.lastnameShip.value;
    document.forms.billShip.elements.address1Bill.value = document.forms.billShip.elements.address1Ship.value;
    document.forms.billShip.elements.address2Bill.value = document.forms.billShip.elements.address2Ship.value;
    document.forms.billShip.elements.cityBill.value = document.forms.billShip.elements.cityShip.value;
    document.forms.billShip.elements.countryBill.value = document.forms.billShip.elements.countryShip.value;
    document.forms.billShip.elements.codeBill.value = document.forms.billShip.elements.codeShip.value;

    //copy value of ship state select to billing state select value
    let stateShip = document.getElementById("stateShip");
    let stateBill = document.getElementById("stateBill");
    stateBill.value = stateBill[stateShip.selectedIndex].value;
  }
}

//Add validation error to all text input fields
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");
for (let i=0; i<fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

//Function to override native error messaging and display custom error in #errorBox
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields"
}

