const express = require('express');
const Game = require('../models/Games');

const router = new express.Router()
// /games
// /games/:genre
// /games/random
// /games/:gameid



// Highest rated games
// USe game ID here to create link for indiviual games

router.get('/', async (req, res, next) => {
    const {search} = req.query;
    
    let allGames;
    try {
        allGames = await Game.findTopGames(search)

        return res.json(allGames);
    } catch (e) {
        return next(e);
    };
});



// Find random games

router.get('/random', async (req, res) => {
    try {
        const randomGames = await Game.findRandomGames();

        return res.json(randomGames);
    } catch (e) {
        return next(e);
    };   
});

router.get('/explore', async (req, res, next) => {

    try {
        const results = await Game.exploreGames();

        return res.json(results);
    } catch (e) {
        return next(e);
    }
});

// Individual game

router.get('/:game', async (req, res, next) => {
    const { game } = req.params;

    try {
        const foundGame = await Game.findGame(game);

        return res.json(foundGame);
    } catch (e) {
        return next(e);
    }
});

router.get('/', async (req, res, next)=>{
    try {
        const games = await Game.searchGames(search);
        return res.json(games);
    } catch (e) {
        return next(e)
    }
})


module.exports = router;