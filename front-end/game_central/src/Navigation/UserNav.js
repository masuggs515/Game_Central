import { useContext } from "react";
import { NavLink } from "react-router-dom";
import TokenContext from "../context/tokenContext";

const UserNav = ({ logout }) => {
    const { currUser } = useContext(TokenContext);

    if (!currUser) return (
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Signup</NavLink>
        </div>
        )
    return (
        <div>
            <NavLink to='/' onClick={logout}>Logout</NavLink>
            <NavLink to={`user/${currUser.username}`} >{currUser.username}</NavLink>

        </div>
    )
};

export default UserNav;