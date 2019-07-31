import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import './search.css';

class Search extends Component {

    render = () => {
        return (
            <div id = "search_container">
                <div id = "search_term_group">
                    <Form>
                        <Form.Row>
                            <Form.Label>Please enter a search term of what you want your database to consist of:</Form.Label>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="searchTerm" size = "lg" as = {Col}>
                                <Form.Control type="text" placeholder="Search Term" style = {{width:"70vw"}}/>
                            </Form.Group>
                            <Form.Group as = {Col}>
                                <Button type = "submit">Search</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>

                <Table id = "table_content">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Pictures</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Womens Shoes</td>
                            <td>500,000</td>
                            <td>7/30/2019</td>
                        </tr>

                        <tr>
                            <td>Books</td>
                            <td>300,000</td>
                            <td>7/30/2019</td>
                        </tr>

                        <tr>
                            <td>Food</td>
                            <td>359,629</td>
                            <td>7/30/2019</td>
                        </tr>

                        <tr>
                            <td>Fruit</td>
                            <td>360,820</td>
                            <td>7/30/2019</td>
                        </tr>

                        <tr>
                            <td>Paper</td>
                            <td>365,957</td>
                            <td>7/30/2019</td>
                        </tr>

                        <tr>
                            <td>Pens</td>
                            <td>16,230</td>
                            <td>7/30/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default Search;