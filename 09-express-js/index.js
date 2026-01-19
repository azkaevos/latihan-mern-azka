const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Parsing data ke JSON
app.use(express.json());

// Membaca file JSON
function readFile() {
  const data = fs.readFileSync("./laptops/json", "utf-8");
  return JSON.parse(data);
}

// Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my First API....👌",
    status: "success 🤸‍♀️",
  });
});

// Route Get All Product
app.get("/api/products", (req, res) => {
  const products = readFile();
  res.json(products);
});

// Route Get Product By Id
app.get("/api/products/:id", (req, res) => {
  const products = readFile();
  const product = products.find((p) => p.id == req.params.id);
  if (!product)
    return res.status(404).json({ message: "Kagak ada IDNYA CUG" });
  res.json(product);
});

// Tambah data ke json
function addProduct(data) {
  fs.writeFileSync("./laptops/json", JSON.stringify(data, null, 2));
}

// Route Create Product
app.post("/api/products", (req, res) => {
  const products = readFile();
  const { title, price, thumbnail } = req.body;

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    title,
    price,
    thumbnail,
  };

  products.push(newProduct);
  addProduct(products);
  res.status(201).json(newProduct);
});

// Route Update Product
app.put("/api/products/:id", (req, res) => {
  const products = readFile();
  const { title, price, thumbnail } = req.body;
  const product = products.findIndex((p) => p.id == req.params.id);

  if (product === -1)
    return res.status(404).json({ message: "Kagak ada IDNYA CUG" });

  products[product] = { ...products[product], title, price, thumbnail };
  addProduct(products);
  res.status(201).json(products[product]);
});

// Route Delete Product
app.delete("/api/products/:id", (req, res) => {
  const products = readFile();
  const product = products.findIndex((p) => p.id == req.params.id);

  if (product === -1)
    return res.status(404).json({ message: "Kagak ada IDNYA CUG" });

  const deleted = products.splice(product, 1);
  addProduct(products);
  res.status(201).json({ message: "Laptop succes di hapus", deleted });
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server Dah Jalan Cuy http://localhost:${port}`);
});
