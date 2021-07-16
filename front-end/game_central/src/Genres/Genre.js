import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper } from "@material-ui/core";

const Genre = ({ category }) => {


    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "#3f51b5",
            fontWeight: "800",
            border: "rgb(67,220,220) solid 1px",
            background: "linear-gradient(180deg, rgba(250,250,250) 0%, rgba(100,100,100,1) 100%)"
        }
    }));

    const classes = useStyles();


    return (
        <Grid item xs={6}>
            <Link to={`/genres/${category.id}`}>
                <Paper className={classes.paper}>
                    {category.name}
                </Paper>
            </Link>
        </Grid>
    )
};

export default Genre;