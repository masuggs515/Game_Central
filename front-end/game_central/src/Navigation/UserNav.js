import { useContext } from "react";
import { NavLink } from "react-router-dom";
import TokenContext from "../context/tokenContext";

const UserNav = ({ logout }) => {
    const { currUser } = useContext(TokenContext);

    if (!currUser) return (
        <div style={{margin: "0 15px"}}>
            <NavLink style={{margin: "0 15px"}} to='/login'>Login</NavLink>
            <NavLink to='/register'>Signup</NavLink>
        </div>
        )
    return (
        <div style={{margin: "0 15px"}}>
            <NavLink style={{margin: "0 15px"}} to={`/user/${currUser.username}`} >{currUser.username}</NavLink>
            <NavLink  to='/' onClick={logout}>Logout</NavLink>

        </div>
    )
};

export default UserNav;