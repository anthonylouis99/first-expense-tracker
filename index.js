const body = document.querySelector("body");
let balance = document.querySelector(".balance");
let creditInput = document.querySelector(".credit--input");
let debitInput = document.querySelector(".debit--input");
let creditBtn = document.querySelector(".credit--btn");
let debitBtn = document.querySelector(".debit--btn");
let logList = document.querySelector(".log--list");
let totalIncome = document.querySelector(".total--income");
let totalExpense = document.querySelector(".total--expense");
let incomeArray = [];
let expenseArray = [];

function setIncomeArray() {
  if (creditInput.value) {
    incomeArray.push(parseInt(creditInput.value));
    totalIncome.innerText = totalCredit(incomeArray);
    balance.innerText = totalIncome.innerText - totalExpense.innerText;
    logList.innerHTML += `<div class="credit--log">
      <img class="credit-arrow" src="./images/green-arrow.png" alt="" />
      <span class="credit--log--fig">₦ ${creditInput.value}</span>
    </div>`;
  } else {
    console.log("empty");
  }

  console.log(incomeArray);
  creditInput.value = "";
}

creditBtn.addEventListener("click", setIncomeArray);

function setExpenseArray() {
  if (debitInput.value) {
    expenseArray.push(parseInt(debitInput.value));
    totalExpense.innerText = totalCredit(expenseArray);
    balance.innerText = totalIncome.innerText - totalExpense.innerText;
    logList.innerHTML += `<div class="debit--log">
      <img class="debit-arrow" src="./images/red-arrow.png" alt="" />
      <span class="debit--log--fig">₦ ${debitInput.value}</span>
    </div>`;
  } else {
    console.log("empty");
  }
  console.log(expenseArray);
  debitInput.value = "";
}

debitBtn.addEventListener("click", function () {
  setExpenseArray();
});

function totalCredit(addCredit) {
  return addCredit.reduce((accumulator, numbers) => {
    return accumulator + numbers;
  }, 0);
}
