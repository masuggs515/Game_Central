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
            borderRadius: "10px",
            height: "200px",
            width: "140px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden"
        },
        title: {
            fontWeight: 500,
            background: "#3f51b5",
            color: "white",
            padding: "5px 10px",
            opacity: "0.85",
            justifySelf: "flex-end"
        },
        link: {
            width: "100%",
            overflow: "hidden",
        },
        button: {
            color: "red",
            position: "relative",
            alignSelf: "flex-end",
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
            } : {background: `url(https://www.wallpapersun.com/wp-content/uploads/2021/01/Gaming-Wallpaper-2-715x536.jpg)`,
            backgroundSize: "100% 100%"}}>
            
            <Link className={classes.link} to={`/games/${game.id}`}>
                <div className={classes.title} key={game.id}>
                    {game.name}
                </div>
            </Link >
            {currUser &&
                <IconButton className={classes.button} 
                onClick={handleClick}>{userFavorites.includes(game.id) ? 
                <FavoriteIcon className="favorited"/> : 
                <FavoriteBorderIcon />}</IconButton>
            }
        </Paper>
    )
};

export default Game;