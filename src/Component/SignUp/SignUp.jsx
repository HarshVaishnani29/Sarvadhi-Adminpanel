import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { logInGoogle, signUpInitiate } from '../../Service/Action/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import signup from './SignUp.css'
function SignUp() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        cpassword: ''
    });

    const [err, setErr] = useState('');
    const { User } = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSignUp = () => {
        dispatch(signUpInitiate(user.email, user.password));
    };

    const googleLogin = () => {
        dispatch(logInGoogle());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.password === user.cpassword) {
            dispatch(signUpInitiate(user.email, user.password, user.name));
            console.log("Done");
        } else {
            setErr("Password and Confirm Password don't match");
            console.log("Error");
        }
    };


    if (User !== null) {
        navigate('/');
        return null;
    }
else {
        return (
            <>
                <div className='auth-one-bg-position auth-one-bg' >
                    <div className='bg-overlay'></div>
                    <div className='shape'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>
                    <div className='auth-page-content'>
                        <div className='container'>
                            <div className="row">
                                <div className='login-top-part text-center col-12'>
                                    <a href="index.html" className='text-white text-decoration-none'><h3>HARSH.</h3></a>
                                    <h5 className='m-3 text-secondary'>Premium Admin & Dashboard Template</h5>
                                </div>
                                <div className='justify-content-center row'>
                                    <div className="col-md-8 col-lg-6 col-xl-5" >
                                        <div className='p-4 card-body bg-white rounded shadow'>
                                            <div className='text-center mt-2'>
                                                <h5 className='text-primary'>Create New Account</h5>
                                                <p className='text-secondary'>Get your free velzon account now</p>
                                            </div>
                                            <div className='p-2 mt-4'>
                                                <Form onSubmit={(e) => { handleSubmit(e) }} >

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email*</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Username*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter username" value={user.name} name="name" onChange={(e) => { handleChange(e) }} />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password*</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Confirm Password*</Form.Label>
                                                        <Form.Control type="password" placeholder="confirm password" value={user.cpassword} name="cpassword" onChange={(e) => { handleChange(e) }} />
                                                        <Form.Text className='text-danger'>
                                                            {
                                                                err
                                                            }
                                                        </Form.Text>
                                                    </Form.Group>
                                                    <Button variant="success" className='w-100' type="submit" onClick={() => { handleSignUp() }}>
                                                        Sign Up
                                                    </Button>
                                                    <div className='mt-4 text-center'>
                                                        <div className='signin-other-title'>
                                                            <h5 className='fs-13 mb-4 title'>create account with</h5>
                                                        </div>
                                                        <div>
                                                            <button type='button' className='btn-icon me-1 btn  btn-primary '><Facebook /></button>
                                                            <button type='button' className='btn-icon me-1 btn  btn-danger ' onClick={() => { googleLogin() }}><Google /></button>
                                                            <button type='button' className='btn-icon me-1 btn  btn-dark '><Github /></button>
                                                            <button type='button' className='btn-icon  btn  btn-info '><Twitter /></button>
                                                        </div>
                                                    </div>
                                                </Form>

                                            </div>

                                        </div>
                                        <div class="mt-4 text-center">
                                            <p class="mb-0">Create account ?
                                                <NavLink className="fw-semibold text-primary text-decoration-underline" to="/login"> LogIn </NavLink>
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

export default SignUp;