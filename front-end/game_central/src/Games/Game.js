import { Link } from 'react-router-dom';

const Game = ({ game }) => {
    
    return (
        <div  className= 'Game' style={{background: `url(${game.background_image})`}}>
        <Link to={`/games/${game.id}`}>
        <div key={game.id}>
                {game.name}
                        </div>
                    </Link >
                    </div>
    )
};

export default Game;