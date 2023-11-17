let display = document.getElementById('display');

function DisplayValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function DeletelastCharecter() {
    display.value = display.value.slice(0, -1);
}