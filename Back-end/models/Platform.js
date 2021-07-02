const axios = require('axios');
const GAME_BASE_URL = require('../helpers/baseUrl');
const GAME_TOKEN = require('../helpers/gameToken');
const Game = require('./Games');

class Platform{
    static async findPlatforms(){
        const results = await axios.get(`${GAME_BASE_URL}/platforms`, 
        {params: {key: GAME_TOKEN}});


        return results.data.results;
    };

    static async findPlatformData(platformId){
        const results = await axios.get(`${GAME_BASE_URL}/platforms/${platformId}`, 
        {params: {key: GAME_TOKEN}});
        const games = await Game.findGameByPlatform(platformId);
        
        const gamesAndData = {...results.data, ...games}

        return gamesAndData;
    }
};

module.exports = Platform;