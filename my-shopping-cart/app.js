function totalCalculator() {
    const totalPhonePrice = Number(document.getElementById('phone-total').innerText)
    const totalCoverPrice = Number(document.getElementById('cover-total').innerText)


    const subTotal = document.getElementById('subtotal')
    const tax = document.getElementById('tax')
    const inTotal = document.getElementById('total')

    const totalAmount = totalPhonePrice + totalCoverPrice;
    subTotal.innerText = totalAmount;
    const taxAmount = parseInt((Number(subTotal.innerText) / 100) * 10);
    tax.innerText = taxAmount;
    inTotal.innerText = taxAmount + totalAmount;

}


function updateQuantity(quantity, isIncrease, total, price) {
    const inputField = document.getElementById(quantity)
    let numberOfQuantity = Number(inputField.value);

    const productPriceElement = document.getElementById(total)


    if (isIncrease) {
        currentQuantity = numberOfQuantity + 1
        inputField.value = currentQuantity
        productPriceElement.innerText = currentQuantity * price;


    } else if (numberOfQuantity > 0) {
        currentQuantity = numberOfQuantity - 1
        inputField.value = currentQuantity
        productPriceElement.innerText = currentQuantity * price;
    }
    totalCalculator()
}


document.getElementById('phone-minus').addEventListener('click', () => {
    updateQuantity('phone-quantity', false, 'phone-total', 1219)
})
document.getElementById('phone-plus').addEventListener('click', () => {
    updateQuantity('phone-quantity', true, 'phone-total', 1219)
})

document.getElementById('cover-minus').addEventListener('click', () => {
    updateQuantity('cover-quantity', false, 'cover-total', 59)
})
document.getElementById('cover-plus').addEventListener('click', () => {
    updateQuantity('cover-quantity', true, 'cover-total', 59)
})