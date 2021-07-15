import { useContext, useEffect, useState } from "react"
import TokenContext from "../context/tokenContext"
import { Link } from "react-router-dom";
import GameAPI from "../GameAPI";
import GameList from "../Games/GameList";
import { Container, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Profile = () => {
    const [faveGames, setFaveGames] = useState(null)
    const { currUser, userFavorites } = useContext(TokenContext);
    useEffect(() => {
        async function getFaveGames() {
            let res = await GameAPI.getMultipleGames(userFavorites);
            setFaveGames(res);
        }
        getFaveGames();
    }, [userFavorites]);

    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#3f51b5",
            fontFamily: "Roboto"
        },
        profile: {
            fontSize: "1.3em"
        }
        ,
        editBtn: {
            float: "right"
        },
        paper: {
            padding: "20px"
        }
    }));

    const classes = useStyles();


    return (
        <Container maxWidth="md">
            <h1 className={classes.headers}>{currUser.username}'s Profile</h1>
            <Paper elevation={5} className={classes.paper}>
                <Button variant="contained" color="primary"
                    className={classes.editBtn}>
                    <Link to={`/user/${currUser.username}/edit`}>
                        Edit Profile
                    </Link>
                </Button>

                <p className={classes.profile}>Name: {currUser.firstName} {currUser.lastName}</p>
            </Paper>


            <h2 className={classes.headers}>Favorite Games</h2>

            {!faveGames ? "Loading favorites" :
                <div>
                    <h3 className={classes.headers}>Number of favorited games: {faveGames.length}</h3>
                    <GameList games={faveGames} />
                </div>
            }

            {faveGames && faveGames.length === 0 ?
                <h2 className={classes.headers}>Find your favorite games <Link to='/games' style={{ textDecoration: "underline" }}>HERE</Link>
                </h2> : ""}

        </Container>
    )

}

export default Profile