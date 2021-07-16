import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import GameList from './GameList';
import { useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "../LoadingScreen";


const Games = () => {

    const [games, setGames] = useState(null);
    const location = useLocation();

    useEffect(function () {
        async function getAllGames() {
            setGames(await GameAPI.getGames(location.search));
        };
        getAllGames();
    }, [location.search]);

    const useStyles = makeStyles(() => ({
        headers: {
            textAlign: "center",
            color: "white",
            fontFamily: "Roboto"
        },
        root:{
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)"
        }
    }));
    const classes = useStyles();

    if (!games) return <LoadingScreen />
    

    return (
        <Container maxWidth="lg" className={classes.root}>
            <h1
                style={{
                    textAlign: "center",
                    color: "#f0f0f0",
                    fontFamily: "Roboto"
                }}>
                Top Games
            </h1>

            <GameList games={games}/>

            
        </Container>
    )
};

export default Games;