const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    res.send(`Hello Server.`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});