import axios from "axios";
import { useEffect } from "react";

const Genre2 = () =>{

    useEffect(()=>{
        getGenres()
    }, [])

    async function getGenres(){
        const res = await axios.get('https://api.rawg.io/api/games?key=eb5b661d9d2b49c38fe75524727285a5')
        console.log(res.data.results)
    }

    return <h1>Hello</h1>
};

export default Genre2;