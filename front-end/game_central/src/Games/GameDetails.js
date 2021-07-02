import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";

const GameDetails = () =>{
    const {gameId} = useParams();
    const [game, setGame] = useState(null);

    useEffect(function getGameDetails(){
        async function getGame(){
            setGame(await GameAPI.getGame(gameId));
        }
        getGame();
    }, [gameId]);

    if(!game) return <h1>Loading...</h1>

    return (
        <div className='GameDetails' 
        style={{background: `url(${game.background_image})`, 
        height: '100vh', 
        width: '100vw'}}>

            <h1>{game.name}</h1>
            <h3>Rating: {game.rating}</h3>
            <p>{game.description_raw}</p>

        </div>
    )
};

export default GameDetails;