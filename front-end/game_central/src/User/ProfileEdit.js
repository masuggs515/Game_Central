import { useContext, useState } from "react";
import GameAPI from "../GameAPI";
import TokenContext from "../context/tokenContext";
import { useHistory } from "react-router-dom";
import { Button, TextField, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ProfileEdit = () => {
    const { currUser, setCurrUser } = useContext(TokenContext);
    const history = useHistory();

    const INITIAL_FORM_DATA = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email,
        password: ''
    };

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let savedUser;
        try {
            savedUser = await GameAPI.editProfile(currUser.username, formData)

        } catch (error) {
            console.log(error)
        }
        setCurrUser(savedUser);
        history.push('/');
        alert("Saved edits");
    };

    const useStyles = makeStyles((theme) => ({
        headers:{
                textAlign: "center",
                color: "#f0f0f0",
                fontFamily: "Roboto",
                marginBottom: "1em"        
        },
        button: {
            marginLeft: "1em",
            marginBottom: "1em",
            width: "90%",
            padding: "10px 0"
        },
        paper:{
            marginTop: "7vh",
            padding: '1em',
            background: "black",
            borderRadius: "15px"
        },
        root: {
            '& .Mui-disabled': {
                color: "white"
            },
            '& .MuiInputBase-input': {
                color: "white"
            },
            '& .MuiTextField-root': {
                margin: theme.spacing(4),
                width: '90%',
                display: "flex",
                color: "white"
            },
            '& label.Mui-focused':{
                color: 'white'
            },
            '& label':{
                color: "white"
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white'
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                }
            }

        }
      }));

      const classes = useStyles();

    if (!currUser) return <h1>Loading...</h1>
    return (
        <Container maxWidth="sm">
            <Paper elevation={9} className={classes.paper}>
            <h1 className={classes.headers}>Edit {currUser.username}'s Profile</h1>
            
                <form onSubmit={handleSubmit} className={classes.root}>

                    <TextField
                    disabled
                        label="Username"
                        variant="outlined"
                        value={currUser.username}

                    />

                    <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        id='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange} />

                    <TextField
                        name='lastName'
                        id='lastName'
                        label="Last Name"
                        variant="outlined"
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                    />

                    <TextField
                        name='email'
                        id='email'
                        label="Email"
                        variant="outlined"
                        type='text'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    
                    <TextField
                        name='password'
                        id='password'
                        label="Password"
                        variant="outlined"
                        type='password'
                        onChange={handleChange}
                    />
                        <Button type="submit" className={classes.button} 
                        variant='contained' 
                        color='primary'>Submit</Button>
                    
                </form>
                </Paper>
        </Container>
    );
};

export default ProfileEdit;