const express = require('express');
const Game = require('../models/Games');
const Genre = require('../models/Genres');

const router = new express.Router()


// List of genres

router.get('/', async (req, res, next) => {

    try {
        const genreList = await Genre.findGenres();

        return res.json(genreList);
    } catch (e) {
        return next(e);
    };
});

// Games by genre

router.get('/:genreId', async (req, res, next) => {
    const {genreId} = req.params;
    try {
        const games = await Game.findGamesByGenre(genreId);
        const details = await Genre.getGenreDetails(genreId);
        details.games = games;
        return res.json(details);
    } catch (e) {
        return next(e);
    }
});

module.exports = router;