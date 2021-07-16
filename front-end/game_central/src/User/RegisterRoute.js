import { Container, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from 'react';
import { useHistory } from "react-router";

const Signup = ({ signup }) => {

    const INITIAL_FORM_DATA = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };

    const history = useHistory();

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        signup(formData)
        setFormData(INITIAL_FORM_DATA);
        history.push('/')
    };


    const useStyles = makeStyles((theme) => ({
        headers: {
            textAlign: "center",
            color: "#f0f0f0",
            fontFamily: "Roboto",
            marginBottom: "1em"
        },
        root: {
            '& .MuiInputBase-input': {
                color: "white"
            },
            '& .MuiTextField-root': {
                margin: theme.spacing(3),
                width: '90%',
                display: "flex"
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
                },
            }

        },
        button: {
            marginLeft: "1.7em",
            marginBottom: "1em",
            width: "90%",
            padding: "10px 0"
        },
        paper: {
            marginTop: "7vh",
            padding: '2em 1em',
            background: "black",
            borderRadius: "20px"
        }
    }));

    const classes = useStyles();


    return (
        <Container maxWidth="sm">
            <Paper elevation={5} className={classes.paper}>
                <h1 className={classes.headers}>Register</h1>
                <form onSubmit={handleSubmit} className={classes.root}>

                    <TextField
                        name="username"
                        label="Username"
                        variant="outlined"
                        id='username'
                        type='text'
                        onChange={handleChange} />

                    <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        id='firstName'
                        type='text'
                        onChange={handleChange} />

                    <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        id='lastName'
                        type='text'
                        onChange={handleChange} />

                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        id='email'
                        type='email'
                        onChange={handleChange} />

                    <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        id='password'
                        type='password'
                        onChange={handleChange} />

                    <Button type="submit" className={classes.button}
                        variant='contained'
                        color='primary'>Submit</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;