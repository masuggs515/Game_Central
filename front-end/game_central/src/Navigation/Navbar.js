import { NavLink, Link } from "react-router-dom";
import UserNav from './UserNav'
import SearchForm from "./SearchForm";
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Toolbar, IconButton, MenuItem, Menu } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from "react";

const Navbar = ({ logout }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: "white"
        },
        title: {
            flexGrow: 1
        },
    }));

    const classes = useStyles();

    return (
            <AppBar position='sticky' className={classes.root}>
                <Toolbar>

                    <IconButton
                        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        color="inherit" className={classes.menuButton} aria-label="menu">

                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><NavLink to='/explore'>Explore</NavLink></MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to='/games'>Top Games</NavLink></MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to='/platforms'>Platforms</NavLink></MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to='/genres'>Genres</NavLink></MenuItem>

                    </Menu>

                    <Typography variant="h6" className={classes.title}>
                        <Link to='/'>GameCentral</Link>
                    </Typography>

                    <UserNav logout={logout} />

                    <SearchForm />
                </Toolbar>
            </AppBar>
    );





};

export default Navbar;