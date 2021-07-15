import axios from "axios";
import { useEffect, useState } from "react";
import Genre from "./Genre";
import { Container, Grid } from "@material-ui/core";

const Genres = () => {

    const [genres, setGenres] = useState(null)

    useEffect(() => {
        getGenres()
    }, [])

    async function getGenres() {
        const res = await axios.get('https://api.rawg.io/api/genres?key=eb5b661d9d2b49c38fe75524727285a5')
        setGenres(res.data.results);
    }

   

    if (!genres) return <h1>Loading...</h1>

    return (
        <Container maxWidth={"md"}>
            <h1
                style={{
                    textAlign: "center",
                    color: "#3f51b5",
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