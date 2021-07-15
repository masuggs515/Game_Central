import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const Platform = ({platform}) =>{

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "#3f51b5",
            fontWeight: "500",
            background: "linear-gradient(180deg, rgba(250,250,250) 80%, rgba(144,144,144,1) 100%)"
        }        
    }));

    const classes = useStyles();

    


    return (
        <Grid item xs={6}>
        <Link to={`/platforms/${platform.id}`}>
            <Paper className={classes.paper}>
        {platform.name}
        </Paper>
        </Link>
        </Grid>
        )
};

export default Platform;