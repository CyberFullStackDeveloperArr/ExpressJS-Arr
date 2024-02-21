const fs = require('fs');
const UglifyJS = require('uglify-js');

// Baca kode sumber dari index.js
const code = fs.readFileSync('index.js', 'utf8');

// Minify kode sumber menggunakan UglifyJS
const result = UglifyJS.minify(code);

// Tulis hasil minifikasi ke file baru
fs.writeFileSync('app.min.js', result.code, 'utf8');
