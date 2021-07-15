const axios = require('axios');
const GAME_BASE_URL = require('../helpers/baseUrl');
const GAME_TOKEN = require('../helpers/gameToken');


class Genre{

    static async findGenres(){
        const results = await axios.get(`${GAME_BASE_URL}/genres`,
            { params: { key: GAME_TOKEN } });

            return results.data.results;
    };

    static async getGenreDetails(genreId){
        const results = await axios.get(`${GAME_BASE_URL}/genres/${genreId}`,
        {
            params: {
                key: GAME_TOKEN
            }
        });

        return results.data
    }
};



module.exports = Genre;