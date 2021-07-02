import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"

class GameAPI {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.log("DATA -->", data)
    console.log("ENDPOINT ===>", endpoint);
    console.log("METHOD --> ", method)
    console.debug("API Call:", endpoint, data, method);


    const url = `${BASE_URL}${endpoint}`;
    const headers = { Authorization: `Bearer ${GameAPI.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  };

  // GAME API ROUTES

  static async getGames() {
    let res = await this.request('/games');
    return res;
  }

  static async getGame(gameId) {
    let res = await this.request(`/games/${gameId}`);
    return res;
  }

  // PLATFORM API ROUTES

  static async getPlatforms() {
    let res = await this.request('/platforms')
    return res;
  };

  static async getPlatform(platformId) {
    let res = await this.request(`/platforms/${platformId}`)
    return res;
  };

  // GENRES API ROUTES

  static async getGenres() {
    let res = await this.request('/genres');
    return res;
  }


  // Authorization routes

  static async login(loginData) {
    let res = await this.request('/auth/login', loginData, "post");
    return res.token
  }

  static async getUser(username) {
    let res = await this.request(`/users/${username}`);
    return res.user
  };


  static async signup(signupData) {
    let res = await this.request('/auth/register', signupData, 'post')
    return res.token
  }

  // Edit user page

  static async editProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "post");
    console.log("RES --->",res)
    return res.user;
  }

}

export default GameAPI;