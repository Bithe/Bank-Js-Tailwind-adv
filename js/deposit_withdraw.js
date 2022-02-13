//Function for get Input field & value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const depositText = inputField.value;
    const deposit = parseFloat(depositText);
    inputField.value = '';
    return deposit;
}

//Function for Total deposit, total withdraw
function updateTotalField(totalField, deposit) {
    const totalDepositAmount = document.getElementById(totalField);
    const totalDepositAmountText = totalDepositAmount.innerText;

    totalDepositAmount.innerText = parseFloat(totalDepositAmountText) + deposit;
}

// Get Current Balance 
function getCurrentBalance() {
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    return previousBalanceTotal;
}

//Function for Balance
function updateBalance(amount, isAdd) {
    const balance = document.getElementById('balance');
    // const balanceText = balance.innerText;
    // const previousBalanceTotal = parseFloat(balanceText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = previousBalanceTotal + amount;
    } else {
        balance.innerText = previousBalanceTotal - amount;
    }
}

// Deposit Event
document.getElementById('deposit-submit').addEventListener("click", function() {
    const deposit = getInputValue('deposit-amount');

    if (deposit < 0) {
        return "Please Valid Number";
    } else {
        updateTotalField('total-deposit-amount', deposit);
        updateBalance(deposit, true);
    }
});

//Withdraw Event
document.getElementById('withdraw-submit').addEventListener("click", function() {

    const withdraw = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();

    if (withdraw > 0 && withdraw < currentBalance) {
        updateTotalField('total-withdraw-amount', withdraw);
        updateBalance(withdraw, false);
    } else {
        console.log('You can not withdraw more then Balance');
    }
});





//---------------------------------------------- WHOLE FUNCTION AGAIN -------------------------//


// document.getElementById('deposit-submit').addEventListener("click", function() {

//     /*const totalAmount = document.getElementById('deposit-amount');
//     const depositText = totalAmount.value;
//     const    = parseFloat(depositText);

//      totalAmount.value = '';
//     */
//     const deposit = getInputValue('deposit-amount');

//     /*  const totalDepositAmount = document.getElementById('total-deposit-amount');
//     const totalDepositAmountText = totalDepositAmount.innerText;

//     totalDepositAmount.innerText = parseFloat(totalDepositAmountText) + deposit; */
//     updateTotalField('total-deposit-amount', deposit);

//     //Update Balance
//     /* const balance = document.getElementById('balance');
//     const balanceText = balance.innerText;
//     balance.innerText = parseFloat(balanceText) + deposit; */
//     updateBalance(deposit, true);


// });

// //Withdraw function
// document.getElementById('withdraw-submit').addEventListener("click", function() {
//     /*const withdrawAmount = document.getElementById('withdraw-amount');
//     const withdrawText = withdrawAmount.value;
//     const withdraw = parseFloat(withdrawText);
//     //Clear the withdraw input field
//     withdrawAmount.value = ""; */

//     const withdraw = getInputValue('withdraw-amount');
//     //
//     /*const totaWithdrawAmount = document.getElementById('total-withdraw-amount');
//     const totalWithdrawText = totaWithdrawAmount.innerText;
//     totaWithdrawAmount.innerText = parseFloat(totalWithdrawText) + withdraw; */
//     updateTotalField('total-withdraw-amount', withdraw);

//     //Update balance with withdraw
//     /*const balance = document.getElementById('balance');
//     const balanceText = balance.innerText;
//     const previousBalanceTotal = parseFloat(balanceText);
//     balance.innerText = previousBalanceTotal - withdraw; */
//     updateBalance(withdraw, false);

//     // Clear the withdraw input field
//     // withdrawAmount.value = "";
// });