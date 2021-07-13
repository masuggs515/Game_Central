import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import Game from './Game';
import { useLocation } from "react-router-dom";



const Games = () => {

    const [games, setGames] = useState(null);
    const location = useLocation();

    useEffect(function () {
        async function getAllGames() {
            setGames(await GameAPI.getGames(location.search));
        };
        getAllGames();
    }, [location.search]);

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