import React, { Component } from 'react'

import { Jumbotron, Container, Button, Group } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BookEvents.css"
import Form from "./Forms"
import { Avatar } from "@material-ui/core"
import { useStateValue } from "./StateProvider"



function BookEvents() {
    const [{ user }] = useStateValue();

    return (
        <div className="bookevents">
            <span className="span__avatar">
                <span className="span__logo">
                    <Avatar
                        alt={user?.displayName}
                        src={user?.photoURL}
                    />

                </span>


                <h3>{user?.displayName}</h3>
            </span>



            <Jumbotron fluid color="black">
                <Container>
                    <h1>Book Events</h1>
                    <p>
                        Fill the form below and get started.
                    </p>
                </Container>

            </Jumbotron>
            <Form />


        </div>
    )
}

export default BookEvents
