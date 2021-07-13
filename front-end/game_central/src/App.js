import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import Navbar from './Navigation/Navbar';
import GameAPI from './GameAPI';
import { useEffect, useState } from 'react';
import TokenContext from './context/tokenContext';
import jwt from 'jsonwebtoken';

function App() {

  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [userFavorites, setUserFavorites] = useState([])
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function getUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          GameAPI.token = token;
          let { username } = jwt.decode(token);
          let user = await GameAPI.getUser(username);
          setCurrUser(await user);
          setUserFavorites(await user.favorites.map(game=> game.gameId))
          setInfoLoaded(true);
        } catch (e) {
          console.log(e)
        }
      }else{ 
        setInfoLoaded(true)
      }
    }
    setInfoLoaded(false)
    getCurrentUser();
  }, [token]);

  


  const login = async (loginData) => {
    try {
      console.log(loginData)
      setToken(await GameAPI.login(loginData));
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }

  }


  const signup = async (registerData) => {
    try {
      let res = await GameAPI.signup(registerData)
      setToken(res);
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }

  }

  const logout = async () => {
    setCurrUser(null);
    setToken(null);
  }

if(!infoLoaded) return <h1>Loading....</h1>


  return (
    <div className="App">
      <header className="App-header">
        <TokenContext.Provider value={{ token, currUser, setCurrUser, userFavorites, setUserFavorites }}>
          <BrowserRouter>
            <Navbar logout={logout} />
            <Routes login={login} signup={signup}/>
          </BrowserRouter>
        </TokenContext.Provider>
      </header>
    </div>
  );
}

export default App;
