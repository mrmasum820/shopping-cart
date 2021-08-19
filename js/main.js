function updatePhoneNumber(product, price, isIncreasing) {
    const phoneInput = document.getElementById(product + '-number')
    const phoneInputText = phoneInput.value
    let phoneNumber = parseInt(phoneInputText)
    if (isIncreasing == true) {
        phoneNumber = phoneNumber + 1
    }
    else if (phoneNumber > 0) {
        phoneNumber = phoneNumber - 1
    }
    phoneInput.value = phoneNumber
    //update phone total
    const phoneTotal = document.getElementById(product + '-total')
    phoneTotal.innerText = phoneNumber * price
    updateTotal()
}
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number')
    const phoneNumber = parseInt(phoneInput.value)
    return phoneNumber
}
function updateTotal() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const chargerTotal = getInputValue('charger') * 250
    const airpodsTotal = getInputValue('airpods') * 120
    const subTotal = phoneTotal + caseTotal + chargerTotal + airpodsTotal
    const tax = subTotal / 10
    const totalPrice = subTotal + tax
    //update as html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice
}
//phone number update
document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumber('phone', 1219, false)
})
//case number update
document.getElementById('case-plus').addEventListener('click', function () {
    updatePhoneNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updatePhoneNumber('case', 59, false)
})
//charger number updates
document.getElementById('charger-plus').addEventListener('click', function () {
    updatePhoneNumber('charger', 250, true)
})
document.getElementById('charger-minus').addEventListener('click', function () {
    updatePhoneNumber('charger', 250, false)
})
//airpods number updates
document.getElementById('airpods-plus').addEventListener('click', function () {
    updatePhoneNumber('airpods', 120, true)
})
document.getElementById('airpods-minus').addEventListener('click', function () {
    updatePhoneNumber('airpods', 120, false)
})