document.getElementById('Button').addEventListener('click', function() {
    var non = document.getElementById('rupiahInput');
    var but = document.getElementById('Button');
    
    if (non.value.trim() !== '') {
        non.disabled = true;
        but.disabled = true;
        setTimeout(function() {
         non.disabled = false;
         but.disabled = false;
        }, 6000);
    }
});// disabled input button 6 detik

const lebih = document.getElementById('rupiahInput');// 200 max
var inputs = document.getElementById('rupiahInput'); // hapus isi input
var textarea = document.getElementById('resultTextarea');// hapus isi textarea
var click = 0;// hapus isi textarea
var clicks = 0;// hapus isi input
inputs.addEventListener('click', function() {
    clicks++;
    if (clicks === 4) {
        inputs.value = '';
        clicks = 0;
    }
}), // hapus isi input
textarea.addEventListener('click', function() {
    click++;
    if (click === 4) {
        textarea.value = '';
        click = 0;
    }
}),// hapus isi textarea
lebih.addEventListener('input', function() {
    if (this.value.length > 200) {
        alert('Input should be maximum 200 characters.');
        this.value = this.value.substring(0, 200);
        lebih.value = '';
    }
});// 200 max

function cegah() {
    var input = document.getElementById("rupiahInput");
    var regex = /^[0-9\s]+$/;
    if (!regex.test(input.value)) {
        alert("Please enter only numbers, If you delete click 3x/4x on Number");
        input.value = "";
    }// jika bukan berisi angka salah

    var inputnilai = document.getElementById('rupiahInput').value;
    var jalaninput = ambil(inputnilai);
    document.getElementById('rupiahInput').value = jalaninput;// jika berisi XSS maka %
}
function ambil(input) {
    return input.replace(/[<>&"']/g, '%');
}// jika berisi XSS maka %

function convertCurrency() {
    
    var inputValue = document.getElementById('rupiahInput').value;// tidak di jalankan jika input kosong
    var buttonputar = document.getElementById('Button');
    var svgputar = document.getElementById('mySvg');
    if (inputValue.trim() === '') {
        return;
    }// tidak di jalankan jika input kosong
    svgputar.style.animation = 'putar 1s linear infinite';
    setTimeout(function() {
        svgputar.style.animation = 'none';
    }, 6000);// berputar 6 detik ketika button click
    buttonputar.style.animation = 'bulat 1s linear infinite';
    setTimeout(function() {
        buttonputar.style.animation = 'none';
    }, 6000);// berputar 6 detik ketika button click BUTTON PUTAR

    const rupiah = document.getElementById('rupiahInput').value;// kirim express js 
    fetch('/convert', {
     method: 'POST',
        headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `rupiah=${rupiah}`
    })
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
         document.getElementById('resultTextarea').value = `${rupiah} IDR Rp - RI = ${data.ringgit.toFixed(2)} MYR RM - RM`;
        }, 6000);
    })
}