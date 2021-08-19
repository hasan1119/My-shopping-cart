// quantity and total price update


function update(quantity, isIncrease, totalElement, price) {
    const quantityInputFiend = document.getElementById(quantity)
    const totalQuantity = Number(quantityInputFiend.value);
    var totalPriceElement = document.getElementById(totalElement)

    if (isIncrease) {
        let currentQuantity = totalQuantity + 1
        quantityInputFiend.value = currentQuantity;
        totalPriceElement.innerText = currentQuantity * price;

    } else if (totalQuantity > 0) {
        let currentQuantity = totalQuantity - 1;
        quantityInputFiend.value = currentQuantity;
        totalPriceElement.innerText = currentQuantity * price;
    }

    totalUpdate()

}

// subtotal, tax and inTotal price update

function totalUpdate() {
    const subTotalElement = document.getElementById('subTotal')
    const taxElement = document.getElementById('tax')
    const TotalElement = document.getElementById('total')

    const totalPhonePrice = document.getElementById('total-phone-price')
    const totalPhonePriceAmount = Number(totalPhonePrice.innerText)

    const totalCoverPrice = document.getElementById('total-cover-price')
    const totalCoverPriceAmount = Number(totalCoverPrice.innerText)
    let subTotalAmount = totalPhonePriceAmount + totalCoverPriceAmount
    subTotalElement.innerText = subTotalAmount;


    let taxAmount = parseInt((subTotalAmount / 100) * 10);
    taxElement.innerText = taxAmount;

    TotalElement.innerText = taxAmount + subTotalAmount;

}


// Phone
document.getElementById('phone-minus').addEventListener('click', function () {
    update('phone-quantity', false, "total-phone-price", 1219)

})



document.getElementById('phone-plus').addEventListener('click', function () {
    update('phone-quantity', true, "total-phone-price", 1219)

})

// cover
document.getElementById('cover-minus').addEventListener('click', function () {
    update('cover-quantity', false, "total-cover-price", 59)

})



document.getElementById('cover-plus').addEventListener('click', function () {
    update('cover-quantity', true, "total-cover-price", 59)
    totalUpdate()
})