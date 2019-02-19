import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import {Card, CardHeader, CardBody} from "../components/Card";

class Search extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Jumbotron>
                            <h1 className="display-4">(React) Google Books Search</h1>
                            <p className="lead">Search for and Save Books of Interest</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        <Card>
                            <CardHeader>
                                <h4>Search</h4>
                            </CardHeader>
                            <CardBody>
                                <h6>Books</h6>
                                <br></br>
                                <Input></Input>
                                <FormBtn>Search</FormBtn>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;