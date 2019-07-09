import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './about.css';
import PlaceHolder from '../Images/placeholder.png';

class About extends Component {

    render = () => {
        return (

            <div id = "about_background_area">
                <div id = "main_about_area">
                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {PlaceHolder}/>

                        <Card.Body>
                            <Card.Title>Persons name</Card.Title>
                            <Card.Text>Persons Description</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {PlaceHolder}/>

                        <Card.Body>
                            <Card.Title>Persons name</Card.Title>
                            <Card.Text>Persons Description</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {PlaceHolder}/>

                        <Card.Body>
                            <Card.Title>Persons name</Card.Title>
                            <Card.Text>Persons Description</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {PlaceHolder}/>

                        <Card.Body>
                            <Card.Title>Persons name</Card.Title>
                            <Card.Text>Persons Description</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

}

export default About;