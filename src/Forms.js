import React, { Component, useState } from 'react'
import { Jumbotron, Container, Form, Button, Group, Col } from 'react-bootstrap';
import "./Forms.css"
import axios from 'axios';


class Forms extends Component {

    state = {
        email: "",
        venue: "",
        venueType: "",
        no_of_guests: "",
        city: "",
        State: "",
        zip: ""

    };

    handleEmail = (e) => {

        this.setState({
            email: e.target.value
        });
    }

    handleVenue = (e) => {

        this.setState({
            venue: e.target.value
        });
    }
    handleVenueType = (e) => {

        this.setState({
            venueType: e.target.value
        });
    }
    handleGuests = (e) => {

        this.setState({
            no_of_guests: e.target.value
        });
    }
    handleCity = (e) => {

        this.setState({
            city: e.target.value
        });
    }
    handleState = (e) => {

        this.setState({
            State: e.target.value
        });
    }
    handleZip = (e) => {

        this.setState({
            zip: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let databody = {
            "email": this.state.email,
            "venue": this.state.venue,
            "venueType": this.state.venueType,
            "no_of_guests": this.state.no_of_guests,
            "city": this.state.city,
            "State": this.state.State,
            "zip": this.state.zip

        }

        axios
            .post("http://localhost:5004/forms", databody)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="forms">


                <Form>
                    <Form.Row>
                        <Form.Group value={this.email} onChange={this.handleEmail} as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group value={this.venue} onChange={this.handleVenue} as={Col} controlId="formGridPassword">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control placeholder="San Francisco" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group value={this.venueType} onChange={this.handleVenueType} controlId="formGridAddress1">
                        <Form.Label>Venue Type</Form.Label>
                        <Form.Control placeholder="Marriage, Birthday Party, or Wedding" />
                    </Form.Group>

                    <Form.Group value={this.no_of_guests} onChange={this.handleGuests} controlId="formGridAddress2">
                        <Form.Label>Enter number of guests</Form.Label>
                        <Form.Control placeholder="100-200, 300-400" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group value={this.city} onChange={this.handleCity} as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group value={this.State} onChange={this.handleState} as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control />

                        </Form.Group>

                        <Form.Group value={this.zip} onChange={this.handleZip} as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={this.handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <section className="submit" >


                </section>

            </div>
        )
    }
}


export default Forms

