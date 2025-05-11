let incomeArr = [];
let expenseArr = [];


//BUTTONS
let incomeBtn = document.getElementById("incomeBtn");
let expenseBtn = document.getElementById("expenseBtn");

//INPUT-VALUES
let description = document.getElementById("desc").value;
let amount = document.getElementById("amount").value;

//SKAPA LISTOR

let incomeList = document.getElementById("incomeList");
let expenseList = document.getElementById("expenseList");

//FUNKTION FÖR INKOMST
    function addIncome() {
    let description = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid number for the amount.");
        return;
    }
    
    let transaction = {
        description: description,
        amount: amount,
        type: "(Inkomst)"
    };
    incomeArr.push(transaction.amount);

    const incomeLi = incomeList.appendChild(document.createElement("li"));
    incomeLi.textContent = transaction.description + " - " + transaction.amount + " kr " + transaction.type;
   
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

    function calculateTotal() {
        let totalIncome = incomeArr.reduce((acc, curr) => acc + curr, 0);
        let totalExpense = expenseArr.reduce((acc, curr) => acc + curr, 0);
        let total = totalIncome - totalExpense;
    
        return total;
    }
    
    let balance = document.getElementById("balance");
    balance.textContent = calculateTotal();

}

//FUNKTION FÖR UTGIFT

function addExpenses() {
    let description = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);
 
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid number for the amount.");
        return;
    }
    let transaction = {
        description: description,
        amount: amount,
        type: "(Utgift)"
    };
    expenseArr.push(transaction.amount);

    const expenseLi = expenseList.appendChild(document.createElement("li"));
    expenseLi.textContent = transaction.description + " - " + transaction.amount + " kr " + transaction.type;
   
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

    function calculateTotal() {
        let totalIncome = incomeArr.reduce((acc, curr) => acc + curr, 0);
        let totalExpense = expenseArr.reduce((acc, curr) => acc + curr, 0);
        let total = totalIncome - totalExpense;
    
        return total;
    }
    
    let balance = document.getElementById("balance");
    balance.textContent = calculateTotal();

}



//Event-lyssnare för Inkomst-knapp
incomeBtn.addEventListener("click", addIncome);

//Event-lyssnare för Utgift-knapp
expenseBtn.addEventListener("click", addExpenses);
