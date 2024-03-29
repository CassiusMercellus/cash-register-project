let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const input = document.getElementById("cash");
const change = document.getElementById("change-due");
const purchase = document.getElementById("purchase-btn");

document.addEventListener( "DOMContentLoaded", function() {

    if (input.value < price) {
        alert("Customer does not have enough money to purchase the item")
    } else if (input === price) {
        change.innerText = "No change due - customer paid with exact cash";
    }

})