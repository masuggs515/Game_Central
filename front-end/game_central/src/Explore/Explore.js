import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import { Container } from "@material-ui/core";
import GameList from "../Games/GameList";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "../LoadingScreen";

const Explore = () => {
    const [gameByType, setGameByType] = useState(null);

    useEffect(function () {
        async function getGameByTypes() {
            setGameByType(await GameAPI.explorePage());
        };
        getGameByTypes();
    }, []);

    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#f0f0f0",
            fontFamily: "Roboto"
        },
        root:{
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)"
        }
    }));
    const classes = useStyles();

    if (!gameByType) return <LoadingScreen />

    return (
        <Container className={classes.root} maxWidth="lg">
            <h1 className={classes.headers}>Top Games by Categories</h1>
            <h3 className={classes.headers}>ACTION</h3>
            <GameList games={gameByType.action} />
            <h3 className={classes.headers}>INDIE</h3>
            <GameList games={gameByType.indie} />
            <h3 className={classes.headers}>ADVENTURE</h3>
            <GameList games={gameByType.adventure} />
            <h3 className={classes.headers}>NEW RELEASES</h3>
            <GameList games={gameByType.new} />
        </Container>
    );
};

export default Explore;