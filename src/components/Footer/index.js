import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import * as ROUTES from '../../constants/routes';

class Footer extends Component {
    render = () => {
        return (
            <div id = "footer">
                <div id = "footer_left_list">
                    <p className = "f_title">Services</p>
                    <Link to={ROUTES.SEARCH}><p className = "sub">Search our database</p></Link>
                    <Link to={ROUTES.SERVICES}><p className = "sub">How it works</p></Link>
                </div>

                <div id = "footer_middle_list">
                    <p className = "f_title">About</p>
                    <Link to={ROUTES.CONTACT}><p className = "sub">About iConic</p></Link>
                    <Link to={ROUTES.ABOUT}><p className = "sub">Our Team</p></Link>
                </div>

                <div id = "footer_right_list">
                    <p className = "f_title">Contact Us</p>
                    <Link to={ROUTES.CONTACT}><p className = "sub">Request a Dataset</p></Link>
                    <Link to={ROUTES.CONTACT}><p className = "sub">Ask Us a Question</p></Link>
                </div>

                <div id = "copyright">
                    <p>&copy; 2019 iConic.com</p>
                </div>
            </div>
        )
    }
}

export default Footer;