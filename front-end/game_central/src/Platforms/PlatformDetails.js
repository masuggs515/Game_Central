import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";
import GameList from "../Games/GameList";
import { Container } from "@material-ui/core";



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
            margin: "1em"
        }
    }));

    const classes = useStyles();

    if (!platform) return <h1>Loading...</h1>

    return (
        <Container maxWidth={"md"}>
            <h1 className={classes.headers}>{platform.name}</h1>
            <img src={platform.image_background} className={classes.image} />

            <p className={classes.description}>{platform.description}</p>
            <h2 className={classes.headers}>Games in {platform.name}</h2>
            <GameList games={platform.results} />
        </Container>
    );
};

export default PlatformDetails;