// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL parameters
app.use(express.urlencoded({ extended: true }));

// Home Page Route
app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>');
});

// Bottles Route
app.get('/:number_of_bottles', (req, res) => {
    const { number_of_bottles } = req.params;
    const nextBottleCount = parseInt(number_of_bottles) - 1;

    if (nextBottleCount >= 0) {
        res.send(`<h1>${number_of_bottles} Bottles of beer on the wall.</h1><a href="/${nextBottleCount}">Take one down, pass it around</a><br><a href="/">Start over</a>`);
    } else {
        res.send(`<h1>No more bottles of beer on the wall.</h1><a href="/">Start over</a>`);
    }
});

// Server Listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
