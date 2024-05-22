// ini js //

// Luas Segitiga 
function hitungluas() {
    // Mengambil nilai dari input
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;

    // Menghitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // Menampilkan rumus dan hasil
    document.getElementById('hasil luas segitiga').innerHTML = `L = 1/2 &times; a &times; t <br> L = 1/2 &times; ${alas} &times; ${tinggi} <br> L = ${luas} cm²`;
}

function resetformluassegitiga() {
    // Mengosongkan nilai input
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';

    // Mengosongkan hasil
    document.getElementById('hasil luas segitiga').innerText = '';
}

// Keliling segitiga
// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
    // Mendapatkan nilai dari input
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

// Menghitung keliling
const keliling = sisiA + sisiB + sisiC;

// Menampilkan rumus dan hasil 
document.getElementById('hasil keliling segitiga').innerHTML = `K = Sisi A + Sisi B + Sisi C <br> K = ${sisiA} + ${sisiB} + ${sisiC} <br> K = ${keliling} cm`;
}

// Fungsi untuk mereset nilai input
function resetformkelilingsegitiga() {
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('hasil keliling segitiga').textContent = '';
}