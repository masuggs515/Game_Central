import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import GameAPI from "../GameAPI";
import GameList from "../Games/GameList";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LoadingScreen from "../LoadingScreen";

const GenreDetails = () => {
    const { genreId } = useParams();

    const [genre, setGenre] = useState(null);

    useEffect(function getGenreDetails() {
        async function getGenre() {
            setGenre(await GameAPI.getGenre(genreId));
        }
        getGenre();
    }, [genreId]);


    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#f0f0f0",
            fontFamily: "Roboto"
        },
        description: {
            width: "100%",
            fontSize: "1.2em",
            marginTop: "3vh",
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

    if (!genre) return <LoadingScreen />


    return (
        <Container className={classes.root} maxWidth="lg">
            <Paper className={classes.paper}>
            <h1 className={classes.headers}>{genre.name}</h1>
            <img src={genre.image_background} className={classes.image} />

            <p className={classes.description}>{genre.description}</p>
            </Paper>
            <h2 className={classes.headers}>Games in {genre.name}</h2>
            <GameList games={genre.games} />
        </Container>
    )
};

export default GenreDetails;