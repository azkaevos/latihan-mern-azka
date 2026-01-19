const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Create New Data Movie
router.post('/', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Export Router
module.exports = router;