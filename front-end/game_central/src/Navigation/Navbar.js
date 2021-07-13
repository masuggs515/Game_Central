import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom"
import TokenContext from "../context/tokenContext";
import UserNav from './UserNav'

const Navbar = ({ logout }) => {
    const { currUser } = useContext(TokenContext);
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/games?search=${searchTerm}`)
        setSearchTerm('')
    }


    return (
        <div className='Navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/explore'>Explore</NavLink>
            <NavLink to='/games'>Top Games</NavLink>
            <NavLink to='/platforms'>Platforms</NavLink>
            <NavLink to='/genres'>Genres</NavLink>


            <UserNav logout={logout} />
            

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
        </div>
    )
};

export default Navbar;