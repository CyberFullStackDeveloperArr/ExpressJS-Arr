const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4770;

app.use(express.static('public'));

app.get('/style.css', function(req, res) {
    res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/public/style.css');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app.html');
});

app.post('/convert', (req, res) => {
    const rupiah = parseFloat(req.body.rupiah);
    const ratio = 0.00029;
    const ringgit = rupiah * ratio;
    res.send({ ringgit });
});

app.listen(port, () => {
    console.log(`Ghost Code Night http://localhost:${port}`);
})