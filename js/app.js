function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinNumber = pin + '';
    if (pinNumber.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = getPin();

}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
            calcInput.style.color = 'white';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
        calcInput.style.color = 'white';
    }

});

function verifypin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers');
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    let typedNumbersValue = typedNumbers.value;
    if (pin == typedNumbersValue) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
        typedNumbers.style.color = 'white';
        // typedNumbers.value = '';

    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
        typedNumbers.style.color = 'red';


    }
}
