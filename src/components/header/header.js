import React from 'react';
import logo from '../../images/elexo-logo.svg';
import wishlist from '../../images/wishlist.svg';
import cart from '../../images/cart.svg';
import searchIcon from '../../images/search.svg';
import './header.scss';


function Header() {
    // Import the logo image from the images folder

    return (
        <div className='border_bottom' >
            <div className='topbar_elexo'>
                <span>Welcome to Elexo! Enjoy exclusive deals today.<a href="#shop" className="landing-offer-link">Shop Now</a></span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light container ">
                <a className="navbar-brand" href="#">
                    <img src={logo} width={200} height={200} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-between" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    {/* Search box with icon */}
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-link">
                            <form className="form-inline my-2 my-lg-0 mr-3">
                                <div className="search_container" >
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        style={{ paddingRight: '2rem' }}
                                    />
                                    <img className="search_icon" src={searchIcon} alt="search" />

                                </div>
                            </form>
                        </li>
                        <li className="nav-link">
                            <a><img src={wishlist} width={30} alt="wishlist"></img></a>
                        </li>
                        <li className="nav-link">
                            <a><img src={cart} width={25} alt="cart"></img></a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Header;