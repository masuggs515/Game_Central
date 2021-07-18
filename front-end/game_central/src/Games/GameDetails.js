import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Paper } from "@material-ui/core";
import TokenContext from "../context/tokenContext";
import LoadingScreen from "../LoadingScreen";

const GameDetails = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);
    const { currUser, userFavorites, setUserFavorites } = useContext(TokenContext);

    useEffect(function getGameDetails() {
        async function getGame() {
            setGame(await GameAPI.getGame(gameId));
        }
        getGame();
    }, [gameId]);

    const handleClick = async (e) => {
        if (e.currentTarget.innerText === "ADD TO FAVORITES" ) {
            await GameAPI.addFavorite({ username: currUser.username }, game.id)
            setUserFavorites([...userFavorites, game.id])
        } else {
            await GameAPI.removeFavorite({ username: currUser.username }, game.id)
            setUserFavorites(userFavorites.filter(id => id !== game.id))
        }
    };

    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#f0f0f0",
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
            margin: "1.5em"
        },
        favBtn: {
            margin: 'auto',
            display: "block"
        },
        root:{
            margin: '3vh',
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)",
            borderRadius: "20px"
        }
    }));

    const classes = useStyles();

    if (!game) return <LoadingScreen />
    console.log(game)

    return (
        <Container maxWidth='lg'>
            <Paper className={classes.root}>
                <h1 className={classes.headers}>{game.name}</h1>
                {currUser &&
                <Button color='secondary'
                    variant='contained'
                    className={classes.favBtn}
                    onClick={handleClick}>
                    {userFavorites.includes(game.id) ?
                        "Remove from Favorites"  : "Add to Favorites"}</Button>
                }
                
                <img src={game.background_image} className={classes.image} />
                <p className={classes.description}>{game.description_raw}</p>
            </Paper>
        </Container>
    )
};

export default GameDetails;