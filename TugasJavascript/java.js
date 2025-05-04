const units = {
    seconds: { name: 'detik', value: 1 },
    minutes: { name: 'menit', value: 60 },
    hours: { name: 'jam', value: 3600 }
};

function convertTime() {
    // Ambil elemen dan nilai
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;
    const resultElement = document.getElementById('result');
    
    // Validasi sederhana
    if (isNaN(value) || value < 0) {
        alert('Masukkan angka positif yang valid');
        return;
    }
    
    // Konversi dalam satu baris
    const result = (value * units[fromUnit].value) / units[toUnit].value;
    
    // Format hasil
    const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
    
    // Tampilkan hasil
    resultElement.innerHTML = `
        <strong>Hasil Konversi:</strong><br>
        ${value} ${units[fromUnit].name} = ${formattedResult} ${units[toUnit].name}
    `;
    resultElement.style.display = 'block';
}