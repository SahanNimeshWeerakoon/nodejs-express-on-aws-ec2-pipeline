const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 3000;

app.use("/", express.static(path.join(__dirname, 'dist', 'fornt-end', 'browser')));
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/', (req, res) => {
    res.send('<h1>Express Demo App</h1><h4>Message: Success Update</h4><p>Version: 1.1</p>');
});

app.get('/api/products', (req, res) => {
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
    console.log({port: process.env.PORT});
    console.log(`Demo app listening to port ${port}`);
});