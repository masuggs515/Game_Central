import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import Platform from "./Platform";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "../LoadingScreen";

const Platforms = () => {



    const [platforms, setPlatforms] = useState(null);

    useEffect(function () {
        async function getAllPlatforms() {
            setPlatforms(await GameAPI.getPlatforms())

        };
        getAllPlatforms();
    }, []);

    const useStyles = makeStyles((theme) => ({
        grid: {
            flexGrow: 1,
        },
        root:{
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)"
        }
        
    }));

    const classes = useStyles();

    if (!platforms) return <LoadingScreen />

    return (
        <Container className={classes.root} maxWidth="lg">
        <h1
                style={{
                    textAlign: "center",
                    color: "#f0f0f0",
                    fontFamily: "Roboto"
                }}> Platforms</h1>
        <Grid container spacing={3} className={classes.grid}>
            {platforms.map(platform => {
                return (
                    <Platform key={platform.id} platform={platform} />
                )
            }
            )}
        </Grid>
        </Container>
    )



}

export default Platforms;