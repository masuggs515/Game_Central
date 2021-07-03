import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";

import Genre from "./Genres";


const Genres = () => {

    const [genres, setGenres] = useState(null);
    
    useEffect(()=>{
        if(!genres){
        getAllGenres();
    }
    }, [])

    async function getAllGenres() {
        const results = await GameAPI.getGenres();
        return results;
    };


    if (!genres) return <h1>Loading...</h1>

    return (
        <div className='genres'>
            {genres.map(genre => {
                return (
                    <Genre key={genre.id} genre={genre} />
                )
            }
            )}


        </div>
    )
};

export default Genres;