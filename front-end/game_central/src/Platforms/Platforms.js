import { useEffect, useState } from "react";
import GameAPI from "../GameAPI";
import Platform from "./Platform";

const Platforms = () =>{



    const [platforms, setPlatforms] = useState(null);

    useEffect(function () {
        async function getAllPlatforms() {
            setPlatforms(await GameAPI.getPlatforms())

        };
        getAllPlatforms();
    }, []);

    if (!platforms) return <h1>Loading...</h1>

    return (
        <div  className='platforms'>
            {platforms.map(platform => {
                return (
                    <Platform key={platform.id} platform={platform}/>
                )
            }
            )}


        </div>
    )



}

export default Platforms;