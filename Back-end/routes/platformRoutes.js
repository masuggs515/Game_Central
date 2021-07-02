const express = require('express');
const GAME_BASE_URL = require('../helpers/baseUrl');
const GAME_TOKEN = require('../helpers/gameToken');
const axios = require('axios');
const Platform = require('../models/Platform');

const router = new express.Router();


router.get('/', async (req, res, next)=>{
    try {

        const allPlatforms = await Platform.findPlatforms();

        return res.json(allPlatforms);
        
    } catch (e) {
        return next(e)
    }
});

router.get('/:platformId', async (req, res, next)=>{
    const {platformId} = req.params;
    try {

        const platformData = await Platform.findPlatformData(platformId);
        

        return res.json(platformData);
        
    } catch (e) {
        return next(e)
    }
});

module.exports = router;