import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import { Container } from "@material-ui/core";
import GameList from "../Games/GameList";
import { makeStyles } from "@material-ui/styles";

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
            color: "#3f51b5",
            fontFamily: "Roboto"
        }
    }));
    const classes = useStyles();

    if (!gameByType) return <h1>Loading....</h1>

    return (
        <Container maxWidth={"md"}>
            <h1 className={classes.headers}>Top Games by Categories</h1>
            <h3 className={classes.headers}>ACTION</h3>
            <GameList games={gameByType.action} />
            <h3 className={classes.headers}>INDIE</h3>
            <GameList games={gameByType.indie} />
            <h3 className={classes.headers}>ADVENTURE</h3>
            <GameList games={gameByType.adventure} />
            <h3 className={classes.headers}>Newest Releases</h3>
            <GameList games={gameByType.new} />
        </Container>
    );
};

export default Explore;