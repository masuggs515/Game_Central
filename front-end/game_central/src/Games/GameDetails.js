import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

const GameDetails = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    useEffect(function getGameDetails() {
        async function getGame() {
            setGame(await GameAPI.getGame(gameId));
        }
        getGame();
    }, [gameId]);

    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#3f51b5",
            fontFamily: "Roboto"
        },
        description: {
            width: "50vw",
            fontSize: "1.2em",
            marginTop: "3vh",
            color: "#3f51b5",
            fontWeight: "600",
            textAlign: "right"
        },
        image: {
            float: "right",
            width: "30vw",
            margin: "1.2em"
        }
    }));

    const classes = useStyles();

    if (!game) return <h1>Loading...</h1>

    return (
        <Container maxWidth={"md"}>
            <h1 className={classes.headers}>{game.name}</h1>
            <img src={game.background_image} className={classes.image} />

            <p className={classes.description}>{game.description_raw}</p>

        </Container>
    )
};

export default GameDetails;