import { useContext, useEffect, useState } from "react";
import TokenContext from "../context/tokenContext";
import GameAPI from "../GameAPI";
import Game from './Game';
import { Redirect } from "react-router";



const Games = () => {

    const [games, setGames] = useState(null);
    const {token} = useContext(TokenContext)

    useEffect(function () {
        async function getAllGames() {
            setGames(await GameAPI.getGames());
        };
        getAllGames();
    }, []);

    if(!token) return <Redirect to='/login' />

    if (!games) return <h1>Loading...</h1>


    return (
        <div className='Games'>
            {games.map(game => {
                return (
                    <Game key={game.id} game={game} />
                )
            }
            )}


        </div>
    )
};

export default Games;