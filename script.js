let price = 1.87;
let cid = {
    "PENNY": 1.01,
    "NICKEL": 2.05,
    "DIME": 3.1,
    "QUARTER": 4.25,
    "ONE": 90,
    "FIVE": 55,
    "TEN": 20,
    "TWENTY": 60,
    "ONE HUNDRED": 100
};

document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("cash");
    const change = document.getElementById("change-due");
    const purchase = document.getElementById("purchase");
    const cashInDrawer = document.getElementById("cashInDrawer");

    const itemPrice = document.getElementById("item-price");
    itemPrice.innerText +=" $" + price;

    function cal() {
        for (const denomination in cid) {
            const newItem = document.createElement("p");
            newItem.textContent = `${denomination} $${cid[denomination].toFixed(2)}`;
            cashInDrawer.appendChild(newItem);
        }
    }
    

    purchase.addEventListener("click", function() {
        if (input.value < price) {
            alert("Customer does not have enough money to purchase the item");
        } else if (input.value == price) {
            change.innerText = "No change due - customer paid with exact cash";
        } else if (input.value > price) {
            calculateChange()
        }
    });

    function calculateChange() {
        let changeNeeded = input.value - price;
        let changeToGive = {};
    
        // Reverse the order of denominations to start with higher value ones first
        const denominations = Object.keys(cid).reverse();
    
        denominations.forEach(denomination => {
            const value = cid[denomination];
            const denominationValue = getDenominationValue(denomination);
    
            if (changeNeeded >= denominationValue && value > 0) {
                let amountToUse = Math.min(Math.floor(changeNeeded / denominationValue), value / denominationValue);
                let amount = amountToUse * denominationValue;
                changeToGive[denomination] = amount;
                changeNeeded -= amount;
                changeNeeded = changeNeeded.toFixed(2);
                cid[denomination] -= amount;
            }
        });
    
        if (changeNeeded > 0) {
            change.innerHTML = "<p>Insufficient funds in the register to provide change.</p>";
        } else {
            change.innerHTML = "<p>Change:</p>";
            for (const denomination in changeToGive) {
                let paragraph = document.createElement("p");
                paragraph.textContent = `${denomination}: $${changeToGive[denomination].toFixed(2)}`;
                change.appendChild(paragraph);
            }
        }
    
        // Update the cash in drawer display
        cashInDrawer.innerHTML = "";
        cal();
    }
    
    
    // Helper function to get the value of a denomination
    function getDenominationValue(denomination) {
        switch (denomination) {
            case "PENNY":
                return 0.01;
            case "NICKEL":
                return 0.05;
            case "DIME":
                return 0.1;
            case "QUARTER":
                return 0.25;
            case "ONE":
                return 1;
            case "FIVE":
                return 5;
            case "TEN":
                return 10;
            case "TWENTY":
                return 20;
            case "ONE HUNDRED":
                return 100;
            default:
                return 0;
        }
    }
    
    
    cal()
});
