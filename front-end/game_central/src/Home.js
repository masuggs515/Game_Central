import { useEffect, useState } from "react";
import GameAPI from "./GameAPI";
import Game from "./Games/Game";

const Home =() =>{
    const [games, setGames] = useState(null)

    useEffect(function () {
        async function getRandomGames() {
            setGames(await GameAPI.getRandomGames());
        };
        getRandomGames();
    }, []);

    if(!games) return <h1>Loading...</h1>

    return (
        <div>
        <h1>HOMEPAGE</h1>
        {games.map(game => {
                return (
                    <Game key={game.id} game={game} />
                )
            }
            )}
        </div>
        
    )
};

export default Home;