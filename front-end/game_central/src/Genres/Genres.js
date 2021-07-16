import axios from "axios";
import { useEffect, useState } from "react";
import Genre from "./Genre";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "../LoadingScreen";

const Genres = () => {

    const [genres, setGenres] = useState(null)

    useEffect(() => {
        getGenres()
    }, [])

    async function getGenres() {
        const res = await axios.get('https://api.rawg.io/api/genres?key=eb5b661d9d2b49c38fe75524727285a5')
        setGenres(res.data.results);
    };

    const useStyles = makeStyles(()=>({
        root:{
            padding: "5vh 5vw",
            background: "rgba(0,0,0, 0.95)"
        }
    }));

    const classes = useStyles();

   

    if (!genres) return <LoadingScreen />

    return (
        <Container className={classes.root} maxWidth="lg">
            <h1
                style={{
                    textAlign: "center",
                    color: "#f0f0f0",
                    fontFamily: "Roboto"
                }}> Genres</h1>
            <Grid container spacing={3} >
                {genres.map(game => {
                    return (
                        <Genre key={game.id} category={game} />
                    )
                })}
            </Grid>
        </Container>
    )
};

export default Genres;