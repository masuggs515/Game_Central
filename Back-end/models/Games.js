const axios = require('axios');
const GAME_BASE_URL = require('../helpers/baseUrl');
const GAME_TOKEN = require('../helpers/gameToken');

class Game {

    static async findTopGames() {
        const results = await axios.get(`${GAME_BASE_URL}/games`,
            {
                params: {
                    key: GAME_TOKEN,
                    page_size: 25
                }
            })
        return results.data.results
    };

    static async findRandomGames() {
        let games = [];

        const results = await axios.get(`${GAME_BASE_URL}/games`,
            {
                params: {
                    key: GAME_TOKEN
                }
            });
        let random_idx;

        for (let i = 0; i < 10; i++) {
            random_idx = Math.floor(Math.random() * 10000);
            let randomGame = await results.data.results[random_idx];
            randomGame ? games.push(randomGame) : i--;
        };
        return games;
    }

    static async findGame(game) {
        const results = await axios.get(`${GAME_BASE_URL}/games/${+game}`,
            { params: { key: GAME_TOKEN } });

        return results.data
    };

    static async findGameByPlatform(platformId) {
        const results = await axios.get(`${GAME_BASE_URL}/games`,
            {
                params: {
                    key: GAME_TOKEN,
                    platforms: platformId
                }
            });

        return results.data
    };

    static async findGamesByGenre(genreId) {
        const results = await axios.get(`${GAME_BASE_URL}/games`,
            {
                params: {
                    key: GAME_TOKEN,
                    genres: genreId
                }
            });

        return results.data.results;
    }

    static async exploreGames() {
        try {

            
                const action = await axios.get(`${GAME_BASE_URL}/games`,
                    {
                        params: {
                            key: GAME_TOKEN,
                            page_size: 10,
                            genres: 4
                        }
                    })

                const indie = await axios.get(`${GAME_BASE_URL}/games`,
                    {
                        params: {
                            key: GAME_TOKEN,
                            page_size: 10,
                            genres: 51
                        }
                    })

                const adventure = await axios.get(`${GAME_BASE_URL}/games`,
                    {
                        params: {
                            key: GAME_TOKEN,
                            page_size: 10,
                            genres: 3
                        }
                    });

            return {action: action.data.results,
                    indie: indie.data.results,
                    adventure: adventure.data.results};
        } catch (error) {
            return error
        }
    }

};

module.exports = Game;