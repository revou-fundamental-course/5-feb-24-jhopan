document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    
    if (isNaN(temperature)) {
        alert('Masukkan suhu yang valid!');
        return;
    }
    
    let result;
    
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

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);

    // Hapus elemen salju setelah melewati bagian bawah layar
    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
    });
}

// Membuat beberapa elemen salju jatuh setiap beberapa detik
setInterval(createSnowflake, 500);