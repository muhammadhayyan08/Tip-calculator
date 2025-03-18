document.getElementById('tipForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').innerHTML = `
        Tip Amount: $${tipAmount.toFixed(2)}<br>
        Total Amount: $${totalAmount.toFixed(2)}<br>
        
    `;
});
