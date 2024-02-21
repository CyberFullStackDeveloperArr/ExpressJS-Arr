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
});

const lebih = document.getElementById('rupiahInput');
var inputs = document.getElementById('rupiahInput'); 
var textarea = document.getElementById('resultTextarea');
var click = 0;
var clicks = 0;
inputs.addEventListener('click', function() {
    clicks++;
    if (clicks === 4) {
        inputs.value = '';
        clicks = 0;
    }
}), 
textarea.addEventListener('click', function() {
    click++;
    if (click === 4) {
        textarea.value = '';
        click = 0;
    }
}),
lebih.addEventListener('input', function() {
    if (this.value.length > 200) {
        alert('Input should be maximum 200 characters.');
        this.value = this.value.substring(0, 200);
        lebih.value = '';
    }
});

function cegah() {
    var input = document.getElementById("rupiahInput");
    var regex = /^[0-9\s]+$/;
    if (!regex.test(input.value)) {
        alert("Please enter only numbers, If you delete click 3x/4x on Number");
        input.value = "";
    }

    var inputnilai = document.getElementById('rupiahInput').value;
    var jalaninput = ambil(inputnilai);
    document.getElementById('rupiahInput').value = jalaninput;
}
function ambil(input) {
    return input.replace(/[<>&"']/g, '%');
}

function convertCurrency() {
    
    var inputValue = document.getElementById('rupiahInput').value;
    var buttonputar = document.getElementById('Button');
    var svgputar = document.getElementById('mySvg');
    if (inputValue.trim() === '') {
        return;
    }
    svgputar.style.animation = 'putar 1s linear infinite';
    setTimeout(function() {
        svgputar.style.animation = 'none';
    }, 6000);
    buttonputar.style.animation = 'bulat 1s linear infinite';
    setTimeout(function() {
        buttonputar.style.animation = 'none';
    }, 6000);

    const rupiah = document.getElementById('rupiahInput').value;
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