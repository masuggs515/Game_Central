import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameAPI from "../GameAPI";
import Game from "../Games/Game";


const PlatformDetails = () => {
    const { platformId } = useParams();
    const [platform, setPlatform] = useState(null);

    useEffect(function getplatformDetails() {
        async function getplatform() {
            setPlatform(await GameAPI.getPlatform(platformId));
        }
        getplatform();
    }, [platformId]);

    if (!platform) return <h1>Loading...</h1>

    return (
        <div className='PlatformDetails'
            style={{
                background: `url(${platform.image_background})`,
                height: '100vh',
                width: '100vw'
            }}>
            <h1>{platform.name}</h1>
            <p>{platform.description}</p>
            <h4>Games found on {platform.name}</h4>
            {platform.results.map(game=>{
                return(
                    <Game key={game.id} game={game}/>
                )
            })}
        </div>
    );
};

export default PlatformDetails;