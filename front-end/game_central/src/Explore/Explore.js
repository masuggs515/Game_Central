import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import Game from "../Games/Game";

const Explore = () =>{
    const [gameByType, setGameByType] = useState(null);

    useEffect(function () {
        async function getGameByTypes() {
            setGameByType(await GameAPI.explorePage());
        };
        getGameByTypes();
    }, []);

    if(!gameByType) return <h1>Loading....</h1>

    let actionList = gameByType.action.map(game => {
        return (
            <Game key={game.id} game={game} />
        )
    })

    let indieList = gameByType.indie.map(game => {
        return (
            <Game key={game.id} game={game} />
        )
    })

    let adventureList = gameByType.adventure.map(game => {
        return (
            <Game key={game.id} game={game} />
        )
    })

    return (
        <div>
            <h1>Games by Category</h1>
            <h3>ACTION</h3>
            {actionList}
            <h3>INDIE</h3>
            {indieList}
            <h3>ADVENTURE</h3>
            {adventureList}
        </div>
    );
};

export default Explore;