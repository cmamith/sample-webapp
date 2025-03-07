const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Jenkins CI/CD Pipeline!');
});

app.listen(port, () => {
    console.log(`App running on http://0.0.0.0:${port}`);
});

