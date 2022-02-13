function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const depositText = inputField.value;
    const deposit = parseFloat(depositText);
    inputField.value = '';
    return deposit;
}
//
document.getElementById('deposit-submit').addEventListener("click", function() {
    const deposit = getInputValue('deposit-amount');
    /*const totalAmount = document.getElementById('deposit-amount');
    const depositText = totalAmount.value;
    const    = parseFloat(depositText);

     totalAmount.value = '';
    */
    const totalDepositAmount = document.getElementById('total-deposit-amount');
    const totalDepositAmountText = totalDepositAmount.innerText;

    totalDepositAmount.innerText = parseFloat(totalDepositAmountText) + deposit;

    //Update Balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    balance.innerText = parseFloat(balanceText) + deposit;
});

//Withdraw function
document.getElementById('withdraw-submit').addEventListener("click", function() {
    /*const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawText = withdrawAmount.value;
    const withdraw = parseFloat(withdrawText);
    //Clear the withdraw input field
    withdrawAmount.value = ""; */

    const withdraw = getInputValue('withdraw-amount');
    //
    const totaWithdrawAmount = document.getElementById('total-withdraw-amount');
    const totalWithdrawText = totaWithdrawAmount.innerText;
    totaWithdrawAmount.innerText = parseFloat(totalWithdrawText) + withdraw;

    //Update balance with withdraw
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    balance.innerText =
        previousBalanceTotal - withdraw;
    /*//Clear the withdraw input field
    withdrawAmount.value = ""; */
});