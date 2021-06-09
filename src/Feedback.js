import React from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Carousel, Jumbotron, Row, Col } from 'react-bootstrap';
import "./Feedback.css"
function Feedback() {
    return (
        <div className="feedback">
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
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>



                </Form>

            </div>

        </div>
    )
}

export default Feedback
