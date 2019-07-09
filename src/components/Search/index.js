import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './search.css';

class Search extends Component {

    render = () => {
        return (
            <div id = "search_term_group">
                <Form>
                    <Form.Row>
                        <Form.Label>Please enter a search term of what you want your database to consist of:</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="searchTerm" size = "lg" as = {Col}>
                            <Form.Control type="text" placeholder="Search Term" />
                        </Form.Group>
                        <Form.Group as = {Col}>
                            <Button type = "submit">Search</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        );
    }

}

export default Search;