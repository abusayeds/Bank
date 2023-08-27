document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
     depositField.value = '';

    const deposiTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = deposiTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    deposiTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetTotalString = balanceTotalElement.innerText;
    const previousBalancetTotalAmount = parseFloat(previousBalancetTotalString);
    const newBalanceTotal = previousBalancetTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   
})