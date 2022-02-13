document.getElementById('deposit-submit').addEventListener("click", function() {

    const totalAmount = document.getElementById('deposit-amount');
    const depositText = totalAmount.value;
    const deposit = parseFloat(depositText);
    //
    const totalDepositAmount = document.getElementById('total-deposit-amount');
    const totalDepositAmountText = totalDepositAmount.innerText;

    totalDepositAmount.innerText = parseFloat(totalDepositAmountText) + deposit;

    totalAmount.value = '';

    //Update 
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    balance.innerText = parseFloat(balanceText) + deposit;
});

//Withdraw function
document.getElementById('withdraw-submit').addEventListener("click", function() {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawText = withdrawAmount.value;
    const withdraw = parseFloat(withdrawText);

    //
    const totaWithdrawAmount = document.getElementById('total-withdraw-amount');
    const totalWithdrawText = totaWithdrawAmount.innerText;
    totaWithdrawAmount.innerText = parseFloat(totalWithdrawText) + withdraw;

    //Clear the withdraw input field
    withdrawAmount.value = "";

    //Update balance with withdraw
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    balance.innerText =
        previousBalanceTotal - withdraw;
    //Clear the withdraw input field
    withdrawAmount.value = "";
});