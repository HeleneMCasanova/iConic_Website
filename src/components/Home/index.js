import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

import Triangle from '../Shapes/Triangle';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons/faUserEdit';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div id = "home_background_area">
                <div style = {{marginLeft:'-5vw'}}>
                    <div id = "top_area">
                        <div className = "main_area_text_overlay">
                            <Triangle/>
                        </div>
                        <div>
                            <p>Elementum tempus egestas sed sed. Maecenas sed enim ut sem viverra aliquet eget sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dui sapien eget mi proin sed libero. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu turpis egestas pretium aenean pharetra magna ac. Sed ullamcorper morbi tincidunt ornare massa. Egestas sed tempus urna et pharetra pharetra massa. Consectetur adipiscing elit duis tristique. Ultricies mi quis hendrerit dolor magna eget. Vitae et leo duis ut diam quam. Ornare massa eget egestas purus viverra accumsan in nisl. Purus sit amet volutpat consequat mauris nunc congue. Bibendum arcu vitae elementum curabitur vitae nunc. Nascetur ridiculus mus mauris vitae ultricies leo. Consequat id porta nibh venenatis.</p>
                        </div>
                    </div>

                    <div style = {{color:'white', marginTop:'8%'}}>
                        <div style = {{marginLeft:'6vw', textAlign:'center'}} className = "how_to_steps">
                            <Zoom>
                                <FontAwesomeIcon icon={faList} style = {{marginTop:'30%', fontSize: '8vw'}}/>
                            </Zoom>
                        </div>

                        <div style = {{marginLeft:'13vw', backgroundColor:'#2c2c2c', textAlign:'center'}} className = "how_to_steps">
                            <Zoom>
                                <FontAwesomeIcon icon={faUserEdit} style = {{marginTop:'30%', fontSize: '8vw'}}/>
                            </Zoom>
                        </div>

                        <div style = {{marginLeft:'13vw', backgroundColor:'#ce9e62', textAlign: 'center'}} className = "how_to_steps">
                            <Zoom>
                                <FontAwesomeIcon icon={faDatabase} style = {{marginTop:'30%', fontSize: '8vw'}}/>   
                            </Zoom>                         
                        </div>
                    </div>

                    <div id = "card_area">
                        <div style = {{marginLeft: '6vw'}} className = "card_container">
                            <Card>
                                <Card.Body>
                                    <Card.Title>This is the title</Card.Title>

                                    <Card.Text>Elementum tempus egestas sed sed. Maecenas sed enim ut sem viverra aliquet eget sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dui sapien eget mi proin sed libero. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu turpis egestas pretium aenean pharetra magna ac. Sed ullamcorper morbi tincidunt ornare massa. Egestas sed tempus urna et pharetra pharetra massa.</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div style = {{marginLeft: '6vw'}} className = "card_container">
                            <Card>
                                <Card.Body>
                                    <Card.Title>This is the title</Card.Title>

                                    <Card.Text>Elementum tempus egestas sed sed. Maecenas sed enim ut sem viverra aliquet eget sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dui sapien eget mi proin sed libero. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu turpis egestas pretium aenean pharetra magna ac. Sed ullamcorper morbi tincidunt ornare massa. Egestas sed tempus urna et pharetra pharetra massa.</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div style = {{marginLeft: '6vw'}} className = "card_container">
                            <Card>
                                <Card.Body>
                                    <Card.Title>This is the title</Card.Title>

                                    <Card.Text>Elementum tempus egestas sed sed. Maecenas sed enim ut sem viverra aliquet eget sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum. Dui sapien eget mi proin sed libero. Accumsan tortor posuere ac ut consequat semper viverra nam. Eu turpis egestas pretium aenean pharetra magna ac. Sed ullamcorper morbi tincidunt ornare massa. Egestas sed tempus urna et pharetra pharetra massa.</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;