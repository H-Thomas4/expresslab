const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/order/:id', (req, res) => {
    let name = req.params.name;
    let email = req.query.email;
    res.send(`Your name is ${name} and email is ${email}`);
});

app.listen(3000);