import { useContext } from 'react';
import { Link } from 'react-router-dom';
import tokenContext from '../context/tokenContext'
import GameAPI from '../GameAPI';

const Game = ({ game }) => {
    const { currUser, userFavorites, setUserFavorites } = useContext(tokenContext);

    const handleClick = async (e) => {
        if (e.target.innerText === "Add Favorite") {
            e.target.innerText = "Remove Favorite"
            await GameAPI.addFavorite({ username: currUser.username }, game.id)
            setUserFavorites([...userFavorites, game.id])
        } else {
            e.target.innerText = "Add Favorite"
            await GameAPI.removeFavorite({ username: currUser.username }, game.id)
            setUserFavorites(userFavorites.filter(id => id !== game.id))
        }
    }

    return (
        <div className='Game' style={{ background: `url(${game.background_image})` }}>
            {currUser &&
                <button onClick={handleClick}>{userFavorites.includes(game.id) ? "Remove Favorite" : "Add Favorite"}</button>
            }
            <Link to={`/games/${game.id}`}>
                <div key={game.id}>
                    {game.name}
                </div>
            </Link >
        </div>
    )
};

export default Game;