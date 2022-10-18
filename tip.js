function calculateTip() {
  let billAmt = document.getElementById("billAmt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleAmt").value;

  // validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter value");
    return;
  }
  //check to see if this is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //calculate tip
  let total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call a function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
