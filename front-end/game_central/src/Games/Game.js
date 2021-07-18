import { useContext } from 'react';
import { Link } from 'react-router-dom';
import tokenContext from '../context/tokenContext'
import GameAPI from '../GameAPI';
import { Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

const Game = ({ game }) => {
    const { currUser, userFavorites, setUserFavorites } = useContext(tokenContext);

    const handleClick = async (e) => {
        if (e.target.classList.contains("MuiSvgIcon-root")) {
            await GameAPI.addFavorite({ username: currUser.username }, game.id)
            setUserFavorites([...userFavorites, game.id])
        } else {
            await GameAPI.removeFavorite({ username: currUser.username }, game.id)
            setUserFavorites(userFavorites.filter(id => id !== game.id))
        }
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            margin: theme.spacing(2),
            border: "rgb(67,81,182) solid 1px",
            borderRadius: "10px",
            height: "135px",
            width: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden"
        },
        title: {
            fontWeight: 500,
            background: "linear-gradient(180deg, rgba(150,150,150) 0%, rgba(10,10,10,1) 100%)",
            color: "white",
            padding: "5px 10px",
            opacity: "0.85"
        },
        link: {
            width: "100%",
            overflow: "hidden",
        },
        button: {
            color: "red",
            position: "absolute",
            marginBottom: "105px",
            marginLeft: "200px",
            opacity: "0.7",
            padding: "3px",
            margin: "3px"
        }
    }))

    const classes = useStyles();
    return (
        <Paper elevation={3}
            className={classes.paper}
            style={game.background_image ? {
                background: `url(${game.background_image})`,
                backgroundSize: "100% 100%"
            } : {background: `url(https://t4.ftcdn.net/jpg/02/42/75/73/360_F_242757347_o0ltkMQ9gOhietePjEnj8MfqQZfuhgTL.jpg)`,
            backgroundSize: "100% 100%"}}>
            
            <Link 
            style={!currUser ? {alignSelf: "flex-end"} : {alignSelf: "flex-start"}}
            className={classes.link} 
            to={`/games/${game.id}`}>
                <div className={classes.title} key={game.id}>
                    {game.name}
                </div>
            </Link >
            {currUser &&
                <IconButton className={classes.button} 
                onClick={handleClick}>{userFavorites.includes(game.id) ? 
                <FavoriteIcon /> : 
                <FavoriteBorderIcon />}</IconButton>
            }
        </Paper>
    )
};

export default Game;