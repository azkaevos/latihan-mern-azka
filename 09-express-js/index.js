const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

//Parsing Data Ke JSON
app.use(express.json());

//Read JSON File
function readFile() {
    const data = fs.readFileSync('products.json', 'utf-8');
    return JSON.parse(data);
}

//Routing
app.get('/', (req, res) => {
    res.json({
        message: "Welcome To My First API....👌",
        status: "Running...🚀",
    });
});

//Routing Get All Products
app.get('/api/laptops', (req, res) => {
    const laptops = readFile();
    res.json(laptops);
})

//Routing Get Product By ID
app.get('/api/laptops/:id', (req, res) => {
    const laptops = readFile();
    const laptop = laptops.find(p => p.id === req.params.id);
    if (!laptop) {return res.status(404).json({ message: "Laptop not found" });}
    res.json(laptop);
});

//Running The Server....
app.listen(port, () => {
    console.log(`Server is Running🚀 at http://localhost:${port}`);
});