import React from 'react'
import { Component } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Carousel, Jumbotron, Row, Col } from 'react-bootstrap';
import "./Feedback.css"
import axios from 'axios';

class Feedback extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        feedback: ""
    }

    handleFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        });
    }

    handleLastName = (e) => {
        this.setState({
            lastname: e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleFeedback = (e) => {
        this.setState({
            feedback: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let databody = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "email": this.state.email,
            "feedback": this.state.feedback,
        }

        axios
            .post("http://localhost:5004/feedback", databody)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="feedback" >
                <div className="jumbotron">
                    <Jumbotron>
                        <h1>Feedback </h1>
                        <p>
                            Your Feedback is valuable for us.
                        </p>

                    </Jumbotron>
                </div>
                <div className="feedback-form">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={this.firstname} onChange={this.handleFirstName} placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={this.lastname} onChange={this.handleLastName} placeholder="Last name" />
                            </Col>
                        </Row>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={this.email} onChange={this.handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control value={this.feedback} onChange={this.handleFeedback} as="textarea" rows={3} />
                        </Form.Group>


                        <Button onClick={this.handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>



                    </Form>

                </div>

            </div>
        )



    }

}

export default Feedback
