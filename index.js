require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(bodyParser.json())


app.all('*', (req, res) => {
    console.log(req.path)
    res.send('Hello, World from app1! Version:1 Test-3');
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.post('/order', (req, res) => {

    let x = 'hi'

    res.json({ message: x, body: req.body })
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
