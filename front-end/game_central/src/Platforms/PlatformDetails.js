import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";
import GameList from "../Games/GameList";
import { Container, Paper } from "@material-ui/core";
import LoadingScreen from "../LoadingScreen";



const PlatformDetails = () => {
    const { platformId } = useParams();
    const [platform, setPlatform] = useState(null);

    useEffect(function getplatformDetails() {
        async function getplatform() {
            setPlatform(await GameAPI.getPlatform(platformId));
        }
        getplatform();
    }, [platformId]);

    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#f0f0f0",
            fontFamily: "Roboto"
        },
        description: {
            width: "100%",
            fontSize: "1.2em",
            margin: "3vh 0",
            color: "#3f51b5",
            fontWeight: "600",
            textAlign: "right"
        },
        image: {
            float: "right",
            width: "60%",
            margin: "1em"
        },
        root:{
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)"
        },
        paper: {
            padding: "4vh 5%",
            background: "black"
        }
    }));

    const classes = useStyles();

    if (!platform) return <LoadingScreen />

    return (
        <Container className={classes.root} maxWidth="lg">
            <Paper className={classes.paper}>
            <h1 className={classes.headers}>{platform.name}</h1>
            <img src={platform.image_background} className={classes.image} />

            <p className={classes.description}>{platform.description}</p>
            </Paper>
            <h2 className={classes.headers}>Games on {platform.name}</h2>
            
            <GameList games={platform.results} />
            
        </Container>
    );
};

export default PlatformDetails;