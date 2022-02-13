document.getElementById('deposit-submit').addEventListener("click", function() {
    const depositAmount = document.getElementById('deposit-amount');
    const deposit = depositAmount.value;

    //get current deposit
    const totalDepositAmount = document.getElementById('total-deposit-amount');

    totalDepositAmount.innerText = deposit;
    depositAmount.value = "";

});