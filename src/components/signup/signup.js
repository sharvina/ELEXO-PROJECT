import React, { useState } from 'react';
import Header from '../header/header';
import signupImg from '../../images/signup-img.png';
import './signup.css';
import '../../styles/global.css';

function Signup() {

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
        <div>
            <Header />
            <div className='signup_container d-flex  align-items-center' >
                <div className='left_side'>
                    <img src={signupImg} alt='signup img'></img>
                </div>
                <div className='right_side'>
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
                        <div className='d-flex align-items-center justify-content-between mt-4'>
                            <button className='btn_tag btn_primary' type="submit">Sign Up</button>
                            <a href="#" >Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;