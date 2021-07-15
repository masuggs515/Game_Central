import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import GameAPI from "../GameAPI";
import GameList from "../Games/GameList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

    if (!genre) return <h1>Loading...</h1>


    return (
        <Container maxWidth={"md"}>
            <h1 className={classes.headers}>{genre.name}</h1>
            <img src={genre.image_background} className={classes.image} />

            <p className={classes.description}>{genre.description}</p>
            <h2 className={classes.headers}>Games in {genre.name}</h2>
            <GameList games={genre.games} />
        </Container>
    )
};

export default GenreDetails;