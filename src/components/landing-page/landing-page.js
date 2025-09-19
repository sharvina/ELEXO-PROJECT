import React from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import elexoLogo from '../../images/elexo-logo.svg';



function LandingPage() {

    return (
        <div>
            <div className='topbar_elexo'>
                <span>Welcome to Elexo! Enjoy exclusive deals today.<a href="#shop" className="landing-offer-link">Shop Now</a></span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={elexoLogo} alt="Elexo Logo" style={{ height: '40px' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100 gap-3">
                            <li className="nav-item">
                                <Link to="/signup" className=" btn_tag btn_primary" href="#shop">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <a className=" btn_tag btn_secondary" href="#shop">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mt-5 mb-5">
                <section>
                    <h2>Welcome to Elexo</h2>
                    <p>
                        This is the landing page of your application. Discover features, connect, and get started!
                    </p>
                </section>
            </main>
            <footer className="text-center fixed-bottom bg-light py-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} Elexo. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;