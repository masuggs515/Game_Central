const axios = require('axios');
const GAME_BASE_URL = require('../helpers/baseUrl');
const GAME_TOKEN = require('../helpers/gameToken');


class Genre{

    static async findGenres(){
        const results = await axios.get(`${GAME_BASE_URL}/genres`,
            { params: { key: GAME_TOKEN } });

            return results.data.results;
    }
};

module.exports = Genre;