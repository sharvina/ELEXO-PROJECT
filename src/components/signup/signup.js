import React, { useState } from 'react';
import Header from '../header/header';
import signupImg from '../../images/signup.jpg';
import './signup.css';
import '../../styles/global.css';
import googleImg from '../../images/google.svg';
import { Link } from "react-router-dom";



function Signup() {
    const handleGoogleLogin = () => {
        window.location.href = `https://www.google.com/?zx=1758283080159&no_sw_cr=1`;
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Save temporarily in state
        console.log("Temporary Data:", formData);

        // You can show confirmation or redirect
        alert("Signup data stored temporarily!");
    };

    return (
        <div >

            <div className='container mx-auto py-5'>
                <div className='signup_container d-flex  align-items-center' >

                    <div className='form_section'>
                        <h2>Create an account</h2>
                        <p>Enter your details below</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input placeholder='Name'
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input placeholder='Email'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input placeholder='Phone Number'
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input placeholder='Password'
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form_footer mt-5'>
                                <button className='btn_tag btn_primary w-100' type="submit">Sign Up</button>
                                <button className='d-flex justify-content-center gap-3 align-items-center  mt-3 btn_tag  w-100 ' type="submit" onClick={handleGoogleLogin}><img src={googleImg} alt='google icon'></img>Sign up with Google</button>
                                <a className='pt-4 text-center d-block'>Already have account? <Link to="/login"> Log in</Link></a>
                            </div>
                        </form>
                    </div>
                    <div className='banner_section'>
                        <img src={signupImg} alt='signup img'></img>
                        <h2>Exclusive Discounts Await – <br />  Sign Up Free!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;