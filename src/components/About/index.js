import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './about.css';
import Helene from '../Images/helene.jpg';
import Jake from '../Images/jake.jpg';

class About extends Component {

    render = () => {
        return (

            <div id = "about_background_area">
                <div id = "main_about_area">
                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {Helene} style = {{marginLeft:"25%", width:"50%", height:"50%"}}/>

                        <Card.Body>
                            <Card.Title>Helene Casanova</Card.Title>
                            <Card.Subtitle>Co-CEO</Card.Subtitle>
                            <Card.Text>"I am a student, a programming enthusiest, a writer, an innovator and mostly a self-starter."</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className = "about_card_styles">
                        <Card.Img variant = "top" src = {Jake} style = {{marginLeft:"25%", width:"50%", height:"50%"}}/>

                        <Card.Body>
                            <Card.Title>Jacob Lebreux</Card.Title>
                            <Card.Subtitle>Co-CEO</Card.Subtitle>
                            <Card.Text>Persons Description</Card.Text>
                        </Card.Body>
                    </Card>

                    
                </div>
            </div>
        );
    }

}

export default About;