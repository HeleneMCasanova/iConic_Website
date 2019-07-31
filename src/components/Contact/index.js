import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './contact.css';

class Contact extends Component {

    render = () => {
        return (
            <div id = "contact_container">
                <Card id = "contact_one">
                    <Card.Title>Request A Dataset</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type = "First_Name" placeholder = "First Name"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type = "Last_Name" placeholder = "Last Name"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = "Email" placeholder = "Email"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>What do you want us to search for?</Form.Label>
                                <Form.Control type = "search" placeholder = ""/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Number of Results</Form.Label>
                                <Form.Control type = "results" placeholder = ""/>
                                <Form.Text className = "text-muted">We will attempt to get this number of results, but note we may not be able to achieve this number.</Form.Text>
                            </Form.Group>

                            <Button type = "submit">Submit</Button>
                        </Form>
                    </Card.Body>
                    
                </Card>
                    
                <Card id = "contact_two">
                    <Card.Title>Other Questions</Card.Title>
                    <Card.Body>
                        <Card.Text>If you have any other questions, please email us at</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Contact;