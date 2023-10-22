function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // Calculate change due
  let changeDue = cash - price;
  let changeArray = [];

  // Make a copy of the cash-in-drawer array
  let drawerCopy = [...cid];

  // Calculate total cash in the drawer
  let totalCashInDrawer = 0;
  for (let i = 0; i < drawerCopy.length; i++) {
    totalCashInDrawer += drawerCopy[i][1];
  }

  // Handle different cases
  if (changeDue > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue === totalCashInDrawer) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      const [unit, value] = currencyUnit[i];
      let available = drawerCopy[i][1];
      let returned = 0;

      while (changeDue >= value && available > 0) {
        changeDue -= value;
        changeDue = changeDue.toFixed(2);
        returned += value;
        available -= value;
      }

      if (returned > 0) {
        changeArray.push([unit, returned]);
      }
    }

    // If changeDue is greater than 0, it means we don't have exact change
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArray };
    }
  }
}

console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
