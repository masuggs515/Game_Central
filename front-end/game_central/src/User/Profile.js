import { useContext, useState } from "react";
import GameAPI from "../GameAPI";
import TokenContext from "../context/tokenContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
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
        console.log(formData)
        console.log(currUser)
        let savedUser;
        try {
            savedUser = await GameAPI.editProfile(currUser.username, formData)

        } catch (error) {
            console.log(error)
        }
        alert("Saved edits");
        console.log(savedUser)
        history.push('/');
        setFormData({ ...formData, password: '' })
    };

    if (!currUser) return <h1>Loading...</h1>
    return (
        <div className='Profile' style={{height: '89.75vh'}}>
            <h1>{currUser.username}'s Profile</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit} style={{ width: "40vw" }} className='text-start'>

                    <label className='form-label m-0 mt-4' htmlFor='username'>Username: </label>
                    <p className='ms-3'>{currUser.username}</p>
                    <label className='form-label' htmlFor='firstName'>First Name: </label>
                    <input name='firstName'
                        className='form-control mb-2 ms-1'
                        id='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor='lastName' className='form-label'>Last Name:</label>
                    <input name='lastName'
                        className='form-control mb-2 ms-1'
                        id='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input name='email'
                        className='form-control mb-2 ms-1 '
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input name='password'
                        className='form-control mb-2 ms-1'
                        id='password'
                        type='password'
                        onChange={handleChange}
                    />
                    <div className='d-grid'>
                        <button className='btn btn-primary m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;