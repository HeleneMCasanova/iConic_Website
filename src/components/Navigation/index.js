import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

import './navigation.css';
import logo from '../Images/logo.png';

const Navigation = () => (
        <Navbar id = "nav_bar" fixed = "top">
            <Navbar.Collapse>
                <Nav className = "nav_bar_links"  pullright = "true">
                    <Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.ABOUT}>Our Team</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <Navbar.Brand style = {{textAlign:'center'}}> iConic </Navbar.Brand>
            
            <Navbar.Collapse>
                <Nav className = "ml-auto nav_bar_links"  pullright = "true">
                    
                    <Nav.Link><Link to={ROUTES.SERVICES}>Services</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.SEARCH}>Search</Link></Nav.Link>
                    <Nav.Link><Link to={ROUTES.CONTACT}>Contact Us</Link></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

export default Navigation;