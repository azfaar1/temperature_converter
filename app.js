// app.js
const express = require('express');
const { toCelsius, toFahrenheit } = require('./convert');

const app = express();
const port = 3000;

app.get('/convert', (req, res) => {
    const temp = parseFloat(req.query.temp);
    const scale = req.query.scale?.toUpperCase();

    if (isNaN(temp) || !scale || !['C', 'F'].includes(scale)) {
        return res.status(400).json({ error: "Invalid input. Use ?temp=VALUE&scale=C/F" });
    }

    const result = scale === 'C' ? toCelsius(temp) : toFahrenheit(temp);
    res.json({ input: temp, scale, result });
});

app.listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
