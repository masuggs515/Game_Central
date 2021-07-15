import { makeStyles } from "@material-ui/core";
import Game from "./Game";
import { Box } from "@material-ui/core";

const GameList = ({games}) =>{

    const useStyles = makeStyles((theme) => ({
        box: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }
    }));

    const classes = useStyles();
    return (
        <Box className={classes.box}>
                {games.map(game => {
                    return (
                        <Game key={game.id} game={game} />
                    )
                }
                )}

            </Box>
    )
};

export default GameList;