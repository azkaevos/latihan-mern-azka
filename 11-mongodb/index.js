const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Parcing Data To JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routing
app.use("/api/movies", movieRoutes);

// Run The Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
