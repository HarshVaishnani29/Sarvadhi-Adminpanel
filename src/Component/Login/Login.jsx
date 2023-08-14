import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css'
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logInGoogle, logInInitiate } from '../../Service/Action/AuthAction';

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { User, error } = useSelector(state => state.authReducer)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(logInInitiate())
    }

    const googleLogin = () => {
        dispatch(logInGoogle())
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(logInInitiate(user.email, user.password));
    }

    if (User !== null) {
        navigate('/')
    } else {
        return (
            <>
                <div className='auth-one-bg-position auth-one-bg' id='auth-particles'>
                    <div className='bg-overlay'></div>
                    <div className='shape'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>
                    <div className='auth-page-content'>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className='login-top-part text-center col-12'>
                                    <a href="index.html" className='text-white text-decoration-none'><h1>HARSH.</h1></a>
                                    <h6 className='m-3 text-secondary'>Premium Admin & Dashboard Template</h6>
                                </div>
                                <div className='justify-content-center row'>
                                    <div className="col-md-8 col-lg-6 col-xl-5" >
                                        <div className='p-4 card-body bg-white rounded shadow'>
                                            <div className='text-center mt-2'>
                                                <h5 className='text-primary'>Welcome Back !</h5>
                                                <p className='text-secondary'>Sign in to continue to HARSH.</p>
                                            </div>
                                            <div className='p-2 mt-4'>
                                                <Form onSubmit={(e) => { handleSubmit(e) }} >
    
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                                                    </Form.Group>
    
                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                                                    </Form.Group>
    
                                                    {
                                                        error !== null ?
                                                            error === 'auth/user-not-found' ?
                                                                <p className='text-danger'> Please Create Account. </p>
                                                                :
                                                                error === 'auth/wrong-password' ?
                                                                    <p className='text-denger'> Password Wrong </p>
                                                                    : <p className='text-danger'> Somthing Went Wrong </p>
                                                            : null
                                                    }
    
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" label="Remember me" />
                                                    </Form.Group>
                                                    <Button variant="success" className='w-100' type="submit" onClick={() => { handleLogin() }}>
                                                        Sign in
                                                    </Button>
                                                    <div className='mt-4 text-center'>
                                                        <div className='signin-other-title'>
                                                            <h5 className='fs-13 mb-4 title'>Sign In With</h5>
                                                        </div>
                                                        <div>
                                                            <button type='button' className='btn-icon me-1 btn  btn-primary'><Facebook /></button>
                                                            <button type='button' className='btn-icon me-1 btn  btn-danger' onClick={() => { googleLogin() }}><Google /></button>
                                                            <button type='button' className='btn-icon me-1 btn  btn-dark'><Github /></button>
                                                            <button type='button' className='btn-icon  btn  btn-info'><Twitter /></button>
                                                        </div>
                                                    </div>
                                                </Form>
    
                                            </div>
    
                                        </div>
                                        <div class="mt-4 text-center">
                                            <p class="mb-0">Already have account ?
                                                <NavLink className="fw-semibold text-primary text-decoration-underline" to='/signup' > Signup </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;