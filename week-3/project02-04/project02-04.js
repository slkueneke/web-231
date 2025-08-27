/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Shannon Kueneke
      Date: August 27, 2025

      Filename: project02-04.js
 */

// define variables with menu item prices
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// menu item checkbox elements ids
const MENU_CHICKEN = document.getElementById("chicken");
const MENU_HALIBUT = document.getElementById("halibut");
const MENU_BURGER = document.getElementById("burger");
const MENU_SALMON = document.getElementById("salmon");
const MENU_SALAD = document.getElementById("salad");

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

// calculate food total plus tax
function calcTotal() {
  var cost = 0;

  //boolean for checked menu items
  var buyChicken = MENU_CHICKEN.checked;
  var buyHalibut = MENU_HALIBUT.checked;
  var buyBurger = MENU_BURGER.checked;
  var buySalmon = MENU_SALMON.checked;
  var buySalad = MENU_SALAD.checked;

  // if checked, add menu item price to cost, else add 0
  !!buyChicken ? cost += CHICKEN_PRICE : cost += 0;
  !!buyHalibut ? cost += HALIBUT_PRICE : cost += 0;
  !!buyBurger ? cost += BURGER_PRICE : cost += 0;
  !!buySalmon ? cost += SALMON_PRICE : cost += 0;
  !!buySalad ? cost += SALAD_PRICE : cost += 0;

  //display total cost in #foodTotal
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  //display sales tax for total cost in #foodTax
  var tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  //display total cost with tax in #totalBill
  var totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

//event handlers to calculate cost of currently checked items
MENU_CHICKEN.onclick = calcTotal;
MENU_HALIBUT.onclick = calcTotal;
MENU_BURGER.onclick = calcTotal;
MENU_SALMON.onclick = calcTotal;
MENU_SALAD.onclick = calcTotal;