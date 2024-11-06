const express = require('express')
const bodyParser = require('body-parser');

const app = express(); // create express app instance

app.use(bodyParser.json()); // parse incoming JSON

app.get('/', (req, res, next) => {
    res.send("Hello World!")
})

app.listen(3000);



