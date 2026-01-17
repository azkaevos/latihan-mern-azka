const express = require('express');
const app = express();
const port = 3000;

//Parsing Data Ke JSON
app.use(express.json());

//Routing
app.get('/', (req, res) => {
    res.json({
        message: "Welcome To My First API....👌",
        status: "Running...🚀",
    });
});

//Running The Server....
app.listen(port, () => {
    console.log(`Server is Running🚀 at http://localhost:${port}`);
});