const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1><h4>Message: Success</h4><p>Version: 1.0</p>');
});

app.get('/products', (req, res) => {
    res.json([
        {
            product_id: '1',
            price: 200
        },
        {
            product_id: '2',
            price: 250
        }
    ]);
});

app.listen(port, () => {
    console.log({port: process.env.port});
    console.log(`Demo app listening to port ${port}`);
});