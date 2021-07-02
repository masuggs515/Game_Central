import { Route, Switch } from "react-router-dom";

import Genres from "./Genres/Genres";
import Platforms from "./Platforms/Platforms";
import PlatformDetails from "./Platforms/PlatformDetails";
import Games from "./Games/Games";
import GameDetails from './Games/GameDetails';
import Home from './Home'
import LoginRoute from "./User/LoginRoute";
import Signup from "./User/RegisterRoute";
import Profile from "./User/Profile";


const Routes = ({login, signup}) =>{
    
    return (
        <Switch>
            <Route exact path='/user/:username'>
                <Profile />
            </Route>
            <Route exact path='/register'>
                <Signup signup={signup} />
            </Route>
            <Route exact path='/login'>
                <LoginRoute login={login}/>
            </Route>
            <Route exact path='/genres'>
                <Genres />
            </Route>
            <Route exact path='/games'>
                <Games />
            </Route>
            <Route path='/games/:gameId'>
                <GameDetails />
            </Route>
            <Route exact path='/platforms'>
                <Platforms />
            </Route>
            <Route path='/platforms/:platformId'>
                <PlatformDetails />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
        </Switch>
    )
};

export default Routes;