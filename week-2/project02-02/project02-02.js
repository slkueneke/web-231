/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Shannon Kueneke
      Date: August 13, 2025

      Filename: project02-02.js
 */

function verifyForm() {
  //get form field values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  //check if all fields contain a value/are not blank
  (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}

document.getElementById("submit").onclick = verifyForm;

