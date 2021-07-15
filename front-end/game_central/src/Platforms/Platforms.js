import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import Platform from "./Platform";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Platforms = () => {



    const [platforms, setPlatforms] = useState(null);

    useEffect(function () {
        async function getAllPlatforms() {
            setPlatforms(await GameAPI.getPlatforms())

        };
        getAllPlatforms();
    }, []);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        
    }));

    const classes = useStyles();

    if (!platforms) return <h1>Loading...</h1>

    return (
        <Container maxWidth={"md"}>
        <h1
                style={{
                    textAlign: "center",
                    color: "#3f51b5",
                    fontFamily: "Roboto"
                }}> Platforms</h1>
        <Grid container spacing={3} className={classes.root}>
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