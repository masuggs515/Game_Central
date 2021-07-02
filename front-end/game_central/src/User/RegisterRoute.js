import {useState} from 'react'

const Signup = ({signup}) =>{

    const INITIAL_FORM_DATA = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };

    // username, password, firstName, lastName, email

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
        signup(formData)
        setFormData(INITIAL_FORM_DATA)
    };


    return (
        <div className='Signup align-items-center d-flex flex-column' style={{height: '89.75vh'}}>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit} style={{width: '40vw'}} className='text-start'>
                <label className='form-label' htmlFor='username'>Username </label>
                <input name='username'
                    id='username'
                    type='text'
                    className='form-control mb-2'
                    placeholder='Username...'
                    onChange={handleChange}
                />
                <label className='form-label' htmlFor='firstName'>First Name </label>
                <input name='firstName'
                    id='firstName'
                    type='text'
                    className='form-control mb-2'
                    placeholder='First Name...'
                    onChange={handleChange}
                />
                <label className='form-label' htmlFor='lastName'>Last Name </label>
                <input name='lastName'
                    id='lastName'
                    type='text'
                    className='form-control mb-2'
                    placeholder='Last Name...'
                    onChange={handleChange}
                />
                <label className='form-label' htmlFor='email'>Email </label>
                <input name='email'
                    id='email'
                    type='email'
                    className='form-control mb-2'
                    placeholder='Email...'
                    onChange={handleChange}
                />
                <label className='form-label' htmlFor='password'>Password </label>
                <input name='password'
                    id='password'
                    type='password'
                    className='form-control mb-2'
                    placeholder='Password...'
                    onChange={handleChange}
                />
                <div className='d-grid'>
                        <button className='btn btn-primary m-2'>Submit</button>
                    </div>
            </form>
        </div>
    );
};

export default Signup;