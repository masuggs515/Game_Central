import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";

import Genre from "./Genres";


const Genres = () => {

    const [genres, setGenres] = useState([]);
    

    useEffect(()=>{
        getAllGenres();
        // if(genres.length>0){
        //     getAllGenres();
        // }
    }, [])

    async function getAllGenres() {
        const results = await GameAPI.getGenres();
        console.log(results);
        setGenres(results);
    };


    // if (!genres) return <h1>Loading...</h1>
    // console.log(genres)

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