import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://suggs-gaming.herokuapp.com"

class GameAPI {
  static token;

  static async request(endpoint, data = {}, method = "get") {


    const url = `${BASE_URL}${endpoint}`;
    const headers = { Authorization: `Bearer ${GameAPI.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  };

  // GAME API ROUTES

  static async getGames(search = '') {
    const res = await this.request(`/games${search}`);
    return res;
  };

  static async getGame(gameId) {
    const res = await this.request(`/games/${gameId}`);
    return res;
  };

  static async getMultipleGames(arr){
    const res = await axios.all(arr.map(game=> this.request(`/games/${game}`)))
    return res;
  };

  static async explorePage(){
    const res = await this.request('/games/explore');
    return res
  };

  static async addFavorite(data, gameId){
    const res = await this.request(`/favorites/${gameId}/add`, data, "post");
    return res;
  };

  static async removeFavorite(data, gameId){
    const res = await this.request(`/favorites/${gameId}/delete`, data, "post");
    return res;
  };

  static async getRandomGames(){
    const res = await this.request('/games/random');
    return res;
  }



  // PLATFORM API ROUTES

  static async getPlatforms() {
    const res = await this.request('/platforms')
    return res;
  };

  static async getPlatform(platformId) {
    const res = await this.request(`/platforms/${platformId}`)
    return res;
  };



  // GENRES API ROUTES

  static async getGenres() {
    const res = await this.request('/genres');
    return res;
  };

  static async getGenre(genreId){
    const res = await this.request(`/genres/${genreId}`);
    
    return res;
  }

  


  // Authorization routes

  static async login(loginData) {
    const res = await this.request('/auth/login', loginData, "post");
    return res.token
  };

  static async getUser(username) {
    const res = await this.request(`/users/${username}`);
    return res.user
  };


  static async signup(signupData) {
    const res = await this.request('/auth/register', signupData, 'post')
    return res.token
  };




  // Edit user page

  static async editProfile(username, data) {
    const res = await this.request(`/users/${username}`, data, "post");
    return res.user;
  };


}

export default GameAPI;