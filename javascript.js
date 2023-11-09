let legend;
let chat;
let series;
let expenses = [];
let totalExpenses = 0;
let salary = 0;

alimentacaoTotal = 0;
moradiaTotal = 0; 
transporteTotal = 0;
lazerTotal = 0;
outrosTotal = 0;

function calculateBalance() {
    salary = parseFloat(document.getElementById("salary").value) || 0;
    const balance = salary - totalExpenses;
    document.getElementById("total-expenses").textContent = totalExpenses;
    document.getElementById("balance").textContent = balance;
}

function atualizarGrafico() {
   
        
        series.data.setAll([
          { value: alimentacaoTotal, category: "Alimentação" },
          { value: moradiaTotal, category: "Moradia" },
          { value: transporteTotal, category: "Transporte" },
          { value: lazerTotal, category: "Lazer" },
          { value: outrosTotal, category: "Outros" },
        ]);
        
      
        
        series.appear(1000, 100);
        
        }// end am5.ready()
    

function addExpense() {
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;
   
    switch (category) {
        case "Alimentação":
            alimentacaoTotal += amount;
            break;
        case "Moradia":
            moradiaTotal += amount;
            break;
        case "Transporte":
            transporteTotal += amount;
            break;
        case "Lazer":
            lazerTotal += amount;
            break;
        case "Outros":
            outrosTotal += amount;
            break;
        
 }


    if (description && amount && !isNaN(amount)) {
        const expense = {
            description,
            amount,
            category
        };

        expenses.push(expense);

        totalExpenses += amount;
        calculateBalance();
        updateExpenseTable();
        
        

    }


    console.log("Total de Alimentação: " + alimentacaoTotal);
    console.log("Total de Moradia: " + moradiaTotal);
    console.log("Total de Transporte: " + transporteTotal);
    console.log("Total de Lazer: " + lazerTotal);
    console.log("Total de Outros: " + outrosTotal);

atualizarGrafico();


}

function removeExpense(index) {
   

    const removedExpense = expenses.splice(index, 1)[0];
    totalExpenses -= removedExpense.amount;
    calculateBalance();
   
        // Subtrai o valor da despesa removida da categoria apropriada
        const category = removedExpense.category;
        switch (category) {
            case "Alimentação":
                alimentacaoTotal -= removedExpense.amount;
                break;
            case "Moradia":
                moradiaTotal -= removedExpense.amount;
                break;
            case "Transporte":
                transporteTotal -= removedExpense.amount;
                break;
            case "Lazer":
                lazerTotal -= removedExpense.amount;
                break;
            case "Outros":
                outrosTotal -= removedExpense.amount;
                break;
            // Adicione mais casos conforme necessário para outras categorias
        }
    updateExpenseTable();
    atualizarGrafico();
}

function updateExpenseTable() {
    const table = document.getElementById("expense-table");
    table.innerHTML = "";

    expenses.forEach((expense, index) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = expense.description;
        cell2.textContent = expense.amount;
        cell3.textContent = expense.category;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", () => removeExpense(index));
        cell4.appendChild(removeButton);
    });
}




    function calculateBalance() {
        salary = parseFloat(document.getElementById("salary").value) || 0;
        const balance = salary - totalExpenses;
        document.getElementById("total-expenses").textContent = totalExpenses;

        const balanceElement = document.getElementById("balance");
        balanceElement.textContent = balance;

        if (balance >= 0) {
            balanceElement.style.color = "green"; // Saldo positivo (verde)
        } else {
            balanceElement.style.color = "red"; // Saldo negativo (vermelho)
        }
    }

    
