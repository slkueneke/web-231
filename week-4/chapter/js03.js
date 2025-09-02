/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Shannon Kueneke
     Date: 9/2/2025

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Write weekday names to calendar
function addWeekdays() {
  let i = 0; //initial counter value

  //reference the collection of heading cells
  let headingCells = document.getElementsByTagName("th");

  //write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];
    i++; // increase counter by 1
  }
}

// Write game info into calendar
function showGames() {
  for (let i=0; i<gameDates.length; i++) {
    let gameInfo = "";

    //Open the paragraph
    //gameInfo += "<p>";
    switch (gameResults[i]) {
      case "W":
        gameInfo += "<p class='win'>";
        break;
      case "L":
        gameInfo += "<p class='lose'>";
        break;
      case "S":
        gameInfo += "<p class='suspended'>";
        break;
      case "P":
        gameInfo += "<p class='postponed'>";
        break;
    }

    //Display game location
    if (gameLocations[i] === "h") {
      gameInfo += "vs. ";
    } else if (gameLocations[i] === "a") {
      gameInfo += "@ ";
    }

    //Include the opponent
    gameInfo += gameOpponents[i] + "<br>";

    //Include the result and score
    gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

    //Display innings played for suspended, shortened or extrainning games
    if (gameInnings[i] < 5) {
      gameInfo += " [" + gameInnings[i] + "]***";
    } else if (gameInnings[i] < 9) {
      gameInfo += " [" + gameInnings[i] + "]*";
    } else if (gameInnings[i] > 9) {
      gameInfo += " [" + gameInnings[i] + "]";
    }

    //Close the paragraph
    gameInfo += "</p>";


    //Write the information into the tablet cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeend", gameInfo);
  }
}

window.addEventListener("load", addWeekdays);
window.addEventListener("load", showGames);

