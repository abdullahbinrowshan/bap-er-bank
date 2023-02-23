// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //  get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
})

// handle wihdrow button event
// document.getElementById('withdrow-button').addEventListener('click', function () {
//     //  get the amount withdrowed
//     const withdrowInput = document.getElementById('withdrow-input');
//     const newWithdrowText = withdrowInput.value;
//     const newWithdrowAmount = parseFloat(newWithdrowText)

//     // update withdrow total
//     const withdrowTotal = document.getElementById('withdrow-total');
//     const previousWithdrowText = withdrowTotal.innerText;
//     const previousWithdrowAmount = parseFloat(previousWithdrowText);
//     const newWithdrowTotal = previousWithdrowAmount + newWithdrowAmount;
//     withdrowTotal.innerText = newWithdrowTotal;

//     // update account balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
//     balanceTotal.innerText = newBalanceTotal;

//     // clear the withdrow input field
//     withdrowInput.value = '';
// })
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})