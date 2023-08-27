document.getElementById('btn-withdrw').addEventListener('click', function () {
    const withdrwField = document.getElementById('withdrw-field');
    const newWithdewAmountString = withdrwField.value;
    const newWithdewAmount = parseFloat(newWithdewAmountString)
  
    withdrwField.value = '';

    const newWithdewTotal = document.getElementById('withdrw-total');
    const previousWithdrwAmountString = newWithdewTotal.innerText;
    const previousWithdrwAmountTotal = parseFloat(previousWithdrwAmountString);

    const newWrithdrw = previousWithdrwAmountTotal + newWithdewAmount;
    newWithdewTotal.innerText = newWrithdrw

    const balanceTotal = document.getElementById('balance-total');
    const previousBalancetTotalString = balanceTotal.innerText;
    const previousBalancetTotalAmount = parseFloat(previousBalancetTotalString)
    
    const newBalance = previousBalancetTotalAmount - newWithdewAmount;
    balanceTotal.innerText = newBalance;
})