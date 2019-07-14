import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons/faUserEdit';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import './services.css';


class Services extends Component {

    render = () => {
        return (
            <div id = "services_container">
                <div style = {{color:'white', marginTop:'8%'}}>
                    <div style = {{marginLeft:'6vw', textAlign:'center'}} className = "how_to_steps_s">
                        <Zoom>
                            <FontAwesomeIcon icon={faList} style = {{marginTop:'30%', fontSize: '8vw'}}/>
                        </Zoom>
                    </div>

                    <div style = {{marginLeft: '6vw'}} className = "card_container_s">
                        <Card style = {{backgroundColor: '#B9EAEB'}}>
                            <Card.Body>
                                <Card.Title className = "card_title_s">Search</Card.Title>

                                <Card.Text>
                                    <p>First, check our database <a href = "#">here</a> to see if the database you're looking for already exists.</p>

                                    <p>If it does, request it and we will send you an email with a link to download the dataset and instructions on how to extract the images.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div style = {{marginLeft:'6vw', backgroundColor:'#01406C', textAlign:'center'}} className = "how_to_steps_s">
                        <Zoom>
                            <FontAwesomeIcon icon={faUserEdit} style = {{marginTop:'30%', fontSize: '8vw'}}/>
                        </Zoom>
                    </div>

                    <div style = {{marginLeft: '6vw'}} className = "card_container_s">
                        <Card style = {{backgroundColor:'#A2B9C9'}}>
                            <Card.Body>
                                <Card.Title className = "card_title">Request</Card.Title>

                                    <Card.Text>
                                        <p>If the dataset you want does not exist, send us a request <a href = "#">here</a>. Please tell us what you want us to search for and an estimated amount of results you want.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div style = {{marginLeft:'6vw', backgroundColor:'#FF7B0F', textAlign: 'center'}} className = "how_to_steps_s">
                            <Zoom>
                                <FontAwesomeIcon icon={faDatabase} style = {{marginTop:'30%', fontSize: '8vw'}}/>   
                            </Zoom>                         
                        </div>

                        <div style = {{marginLeft: '6vw'}} className = "card_container_s">
                            <Card style = {{backgroundColor: '#FFCFA7'}}>
                                <Card.Body>
                                    <Card.Title className = "card_title_s">Run</Card.Title>
                                    <Card.Text>
                                        <p>Once we have your request, we will run our scripts across several different websites until we have the maximum amount of result we can obtain.</p>

                                        <p>Click <a href="#">here</a> for more details.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Services;