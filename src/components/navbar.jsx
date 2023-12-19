import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";

function NavBar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])

    return  (
        <Navbar expand="lg" className={`bg-transparent ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <h2 className={`Nav-Head ${scrolled ? "scrolled" : ""}`}>ANIME HUB</h2>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${scrolled ? "scrolled" : ""}`} />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ml-auto">
                        <ul className={`nav navbar-nav ${scrolled ? "scrolled" : ""}`}>
                            <li className="nav-item"><a className="nav-link Nav-Name" href="/#/Anime">Anime</a></li>
                            <li className="nav-item"><a className="nav-link Nav-Name" href="#top">About</a></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
      
};

export default NavBar;