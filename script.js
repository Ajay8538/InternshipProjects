function convertTemperature() {
    let temperature = document.getElementById('temp').value;
    let unit = document.querySelector('input[name="unit"]:checked').value;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    let convertedValue;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedValue = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedValue = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    }

    document.getElementById('final').innerText = `Converted Temperature: ${convertedValue.toFixed(2)}° ${convertedUnit}`;
}