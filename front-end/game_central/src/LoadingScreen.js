import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const LoadingScreen = () =>{
    const useStyles = makeStyles(() => ({
        root:{
            display: "flex",
            marginTop: "10vh",
            alignItems: "center",
            justifyContent: "center",
            background: "#0c0c0c",
            padding: "2vh 5vw",
            borderRadius: "25px"
        }
    }));
    const classes = useStyles();

    return(
        <Container maxWidth='md' className={classes.root}>
            <img src='https://i.pinimg.com/originals/3d/80/64/3d8064758e54ec662e076b6ca54aa90e.gif'/>
        </Container>
    )
};

export default LoadingScreen;