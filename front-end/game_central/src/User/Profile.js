import { useContext, useEffect, useState } from "react"
import TokenContext from "../context/tokenContext"
import { Link } from "react-router-dom";
import GameAPI from "../GameAPI";
import Game from "../Games/Game";

const Profile = () => {
    const [faveGames, setFaveGames] = useState(null)
    const { currUser, userFavorites } = useContext(TokenContext);
    useEffect(() => {
        async function getFaveGames() {
            let res = await GameAPI.getMultipleGames(userFavorites);
            setFaveGames(res);
        }
        getFaveGames();
    }, [userFavorites])

    return (
        <div>
            <h1>{currUser.username}'s Profile</h1>
            <p>Name: {currUser.firstName} {currUser.lastName}</p>
            <Link to={`/user/${currUser.username}/edit`}>Edit Profile</Link>
            <h3>Favorite Games</h3>
            {!faveGames ? "Loading favorites" : faveGames.map(game => {
                return (
                    <Game key={game.id} game={game} />
                )
            })}
            {faveGames && faveGames.length ===0 ? "No favorited games" : ""}
        </div>
    )

}

export default Profile