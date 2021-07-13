import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";

import Genre from "./Genres";


const Genres = () => {

    const [genres, setGenres] = useState(null);

    useEffect(() => {
        let isMounted = true;
        async function getAllGenres() {
            setGenres(await GameAPI.getGenres());
        };
        getAllGenres();
        return () => { isMounted = false; }
    }, [genres])




    if (!genres) return <h1>Loading...</h1>
    let genreList = genres.map(genre => {
        return (
            <Genre key={genre.id} genre={genre} />
        )
    }
    );

    return (
        <div className='genres'>
            {genreList}


        </div>
    )
};

export default Genres;