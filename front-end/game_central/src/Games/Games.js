import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import GameList from './GameList';
import { useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";


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
        <Container maxWidth={"md"}>
            <h1
                style={{
                    textAlign: "center",
                    color: "#3f51b5",
                    fontFamily: "Roboto"
                }}>
                Top Games of All Time
            </h1>

            <GameList games={games}/>

            
        </Container>
    )
};

export default Games;