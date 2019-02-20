import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";

class Search extends Component {
    state = {
        books: [],
        title: ""
    };

    handleFormSubmit = event => {
        event.preventDefault()
        API.findBooks(this.state.title).then(res => {
            this.setState({ books: res.data.items, title: "" })
            console.log(this.state.books)
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title (required)"
                                >
                                </Input>
                                <FormBtn
                                    onClick={this.handleFormSubmit}>
                                    Search
                                </FormBtn>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book.id}>
                                        <FormBtn>Save</FormBtn><FormBtn>View</FormBtn>
                                        <h1>{book.volumeInfo.title}</h1>
                                        <h6>{book.volumeInfo.authors}</h6>
                                        <h6>{book.searchInfo.textSnippet}</h6>
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.imageLinks.thumbnail}></img>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;