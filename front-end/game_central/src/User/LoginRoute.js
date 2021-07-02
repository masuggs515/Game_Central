import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginRoute =({login}) =>{

    const history = useHistory();
    const INITIAL_FORM_DATA = {
        username: '',
        password: ''
    };

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e =>{
        e.preventDefault();
        login(formData)
        setFormData(INITIAL_FORM_DATA)
        history.push('/')
    };

    return (
        <div className='Login align-items-center d-flex flex-column' style={{height: '89.75vh'}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{width: '40vw'}}  className='text-start'>
                <label htmlFor='username' className='form-label'>Username </label>
                <input name='username'
                    className='form-control mb-2'
                    id='username'
                    type='text'
                    placeholder='Username...'
                    onChange={handleChange}
                />
                <label htmlFor='password' className='form-label'>Password </label>
                <input name='password'
                className='form-control mb-2'
                    id='password'
                    type='password'
                    placeholder='Password...'
                    onChange={handleChange}
                />
                <div className='d-grid'>
                        <button className='btn btn-primary m-2'>Submit</button>
                    </div>
            </form>
        </div>
    )
};

export default LoginRoute;