document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    
    if (unit === 'celsius') {
        // Konversi dari Celsius ke Fahrenheit
        result = (temperature * 9/5) + 32;
        document.getElementById('result').textContent = `${temperature} Celsius = ${result.toFixed(2)} Fahrenheit`;
    } else {
        // Konversi dari Fahrenheit ke Celsius
        result = (temperature - 32) * 5/9;
        document.getElementById('result').textContent = `${temperature} Fahrenheit = ${result.toFixed(2)} Celsius`;
    }
    
    document.getElementById('resultContainer').style.display = 'block';
});