import { useContext } from "react";
import { NavLink } from "react-router-dom"
import TokenContext from "./context/tokenContext";

const Navbar = ({ logout }) => {
    const { currUser } = useContext(TokenContext);

    return (
        <div className='Navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/explore'>Explore</NavLink>
            <NavLink to='/games'>Top Games</NavLink>
            <NavLink to='/platforms'>Platforms</NavLink>
            <NavLink to='/genres'>Genres</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Signup</NavLink>
            <NavLink to='/' onClick={logout}>Logout</NavLink>
            {currUser &&
                <NavLink to={`user/${currUser.username}`} >{currUser.username}</NavLink>
            }
        </div>
    )
};

export default Navbar;