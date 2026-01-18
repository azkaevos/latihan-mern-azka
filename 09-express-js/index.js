const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

//Parsing Data Ke JSON
app.use(express.json());

//Read JSON File
function readFile() {
    const data = fs.readFileSync('laptops.json', 'utf-8');
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

//Add Data to JSON File
function addLaptop(data) {
    fs.writeFileSync('laptops.json', JSON.stringify(data, null, 2));
}

//Routing Add New Product
app.post('/api/laptops', (req, res) => {
        const laptops = readFile();
        const { title, price, thumbnail } = req.body;

        const newLaptop = {
          id: laptops.length > 0 ? laptops[laptops.length - 1].id + 1 : 1,
          title,
          price,
          thumbnail,
        };


    laptops.push(newLaptop);
    addLaptop(laptops);
    res.status(201).json({ newLaptop, message:"Laptop Added Successfully" });
});

//Routing Update Product
app.put('/api/laptops/:id', (req, res) => {
    const laptops = readFile();
    const laptopIndex = laptops.findIndex((l) => l.id ==req.params.id);

    if (laptopIndex === -1) { return res.status(404).json({ message: "Laptop not found" }); }
    
    laptops[laptopIndex] = { ...laptops[laptopIndex], title, price, thumbnail };
    addLaptop(laptops);
    res.status(200).json({ laptop: laptops[laptopIndex], message:"Laptop Updated Successfully" });
});

//Routing Delete Product
app.delete('/api/laptops/:id', (req, res) => {
    let laptops = readFile();
    const laptopIndex = laptops.findIndex((l) => l.id == req.params.id);

    if (laptopIndex === -1) { return res.status(404).json({ message: "Laptop not found" }); }

    const deletedLaptop = laptops.splice(laptopIndex, 1);
    addLaptop(laptops);
    res.status(200).json({ message:"Laptop Deleted Successfully" });
});

//Running The Server....
app.listen(port, () => {
    console.log(`Server is Running🚀 at http://localhost:${port}`);
});