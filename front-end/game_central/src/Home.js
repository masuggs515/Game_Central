import { useEffect, useState } from "react";
import GameAPI from "./GameAPI";
import GameList from "./Games/GameList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "./LoadingScreen";
import logo from './images/logo.png'

const Home = () => {
    const [games, setGames] = useState(null)

    useEffect(function () {
        async function getRandomGames() {
            setGames(await GameAPI.getRandomGames());
        };
        getRandomGames();
    }, []);

    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            marginTop: "10vh",
            alignItems: "center",
            background: "rgb(0,0,0)",
            padding: "2vh 5vw",
            borderRadius: "25px"
        },
        headers: {
            textAlign: "center",
            color: "rgb(67,220,220)",
            fontFamily: "Roboto",

        },
        games: {
            float: "right",
            width: "40vw"
        },
        logoImg :{
            width: "100%"
        }
    }));
    const classes = useStyles();

    if (!games) return <LoadingScreen />

    console.log(logo)
    return (
        <Container className={classes.root} maxWidth='md'>
            <div>
<img className={classes.logoImg} src={logo}/>                
            </div>
            <div className={classes.games}>
                <GameList games={games} />
            </div>

        </Container>

    )
};

export default Home;