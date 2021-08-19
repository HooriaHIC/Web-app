import React, { useState, useEffect } from "react";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setShow(window.pageYOffset > 10);
    };
    return (
        <nav className={`navbar ${show && 'fix-nav'}`}>
            <ul className="top">
                <div className="left">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="right">
                    <span className="nav-phone"><i className="fas fa-phone-alt"></i> 214-123-4567</span>
                </div>
            </ul>
            <ul className="bottom">
                {/*  we don't have any routes adding <Link /> or <a /> is just simply useless*/}
                <li className="nav-link active">
                    <span>Home</span>
                </li>
                <li className="nav-link">
                    <span>Services</span>
                </li>
                <li className="nav-link">
                    <span>How it works</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;