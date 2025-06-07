// Global variables for price and cid
let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Currency unit values
const UNIT_AMOUNT = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

function roundTo(num, places = 2) {
  return +(Math.round(num + "e+" + places)  + "e-" + places);
}

document.getElementById('purchase-btn').addEventListener('click', function() {
  const cashInput = document.getElementById('cash');
  const changeDueDiv = document.getElementById('change-due');
  let cash = Number(cashInput.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDueDiv.textContent = "No change due - customer paid with exact cash";
    return;
  }

  let changeDue = roundTo(cash - price, 2);
  let cidCopy = JSON.parse(JSON.stringify(cid));
  let totalCid = roundTo(cidCopy.reduce((sum, curr) => sum + curr[1], 0), 2);

  if (totalCid < changeDue) {
    changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let changeArr = [];
  for (let i = cidCopy.length - 1; i >= 0; i--) {
    let denom = cidCopy[i][0];
    let denomTotal = cidCopy[i][1];
    let denomValue = UNIT_AMOUNT[denom];
    let amountToReturn = 0;

    while (changeDue >= denomValue && denomTotal > 0) {
      changeDue = roundTo(changeDue - denomValue, 2);
      denomTotal = roundTo(denomTotal - denomValue, 2);
      amountToReturn = roundTo(amountToReturn + denomValue, 2);
    }

    if (amountToReturn > 0) {
      changeArr.push([denom, amountToReturn]);
    }
  }

  let changeSum = roundTo(changeArr.reduce((sum, curr) => sum + curr[1], 0), 2);

  if (changeSum < roundTo(cash - price, 2)) {
    changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (changeSum === totalCid) {
    // Status CLOSED
    let closedStr = "Status: CLOSED";
    changeArr = cid.filter(x => x[1] > 0).reverse();
    for (let [denom, amt] of changeArr) {
      closedStr += ` ${denom}: $${amt}`;
    }
    changeDueDiv.textContent = closedStr;
    return;
  }

  // Status OPEN
  let openStr = "Status: OPEN";
  for (let [denom, amt] of changeArr) {
    openStr += ` ${denom}: $${amt}`;
  }
  changeDueDiv.textContent = openStr;
});
