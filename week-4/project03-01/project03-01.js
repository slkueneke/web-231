/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Shannon Kueneke
      Date:   9/2/2025

      Filename: project03-01.js
*/

//calculate order total on check/uncheck any menu item and show total order cost
function calcTotal() {
  var orderTotal = 0;
  for (let i=0; i<menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}


let menuItems = document.getElementsByClassName("menuItem");

for (let i=0; i<menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}



 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }