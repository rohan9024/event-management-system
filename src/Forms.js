import React, { Component } from 'react'
import { Jumbotron, Container, Form, Button, Group } from 'react-bootstrap';
import "./Forms.css"


class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(this.email)
    }

    render() {
        return (
            <div className="forms">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <section className="label__email">
                            <Form.Label>Email address</Form.Label>
                        </section>
                        <Form.Control input="email " type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll send you further details on this email.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <section className="label__password">
                            <Form.Label>Password</Form.Label>
                        </section>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default Forms

