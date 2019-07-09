import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

import './navigation.css';
import logo from '../Images/logo.png';

const Navigation = () => (
        <Navbar id = "nav_bar" fixed = "top">
            <Navbar.Brand>
                <img src = {logo}
                width="15%"
                height="15%"
                alt=""/>
                iConic
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav id = "nav_bar_links" className = "ml-auto"  pullright = "true">
                    <Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.ABOUT}>Our Team</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.CONTACT}>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.SEARCH}>Search</Link></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

export default Navigation;