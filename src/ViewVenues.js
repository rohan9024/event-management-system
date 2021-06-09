import React from 'react'
import { useStateValue } from "./StateProvider"
import { Avatar } from "@material-ui/core"
import { Jumbotron, Container, Button, Group, Card } from 'react-bootstrap';
import "./ViewVenues.css"

function ViewVenues() {
    const [{ user }] = useStateValue();

    return (
        <div className="viewvenues">

            <span className="span__avatar">
                <span className="span__logo">
                    <Avatar alt={user?.displayName} src={user?.photoURL} />

                </span>


                <h3>{user?.displayName}</h3>
            </span>



            <Jumbotron fluid color="black">
                <Container>
                    <h1>Looking for Affordable Weddings?</h1>
                    <p>Browse through the best locations.</p>

                </Container>

            </Jumbotron>


            <div className="viewvenues__main">
                <div className="container">
                    <div className="row-1">
                        <Card className="text-center">
                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/manhattan.jpg" />
                            <Card.Body>
                                <Card.Title>Manhattan</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="text-center">
                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/chicago.jpg" />
                            <Card.Body>
                                <Card.Title>Chicago</Card.Title>

                            </Card.Body>
                        </Card>

                    </div>

                    <div className="row-2">

                        <Card className="text-center">
                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/atlanta.jpg" />
                            <Card.Body>
                                <Card.Title>Atlanta</Card.Title>

                            </Card.Body>
                        </Card>


                        <Card className="text-center">
                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/losangeles.jpg" />
                            <Card.Body>
                                <Card.Title>Los Angeles</Card.Title>

                            </Card.Body>
                        </Card>

                    </div>

                    <div className="row-3">
                        <Card className="text-center" style={{ width: '26rem'}}>
                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/charlotte.jpg" />
                            <Card.Body>
                                <Card.Title>Charlotte</Card.Title>

                            </Card.Body>
                        </Card>

                        <Card className="text-center" style={{ width: '26rem'}}>

                            <Card.Img variant="top" src="https://cdn.wedding-spot.com/images/locations/rd/nashville.jpg" />
                            <Card.Body>
                                <Card.Title>Nashville</Card.Title>

                            </Card.Body>
                        </Card>




                    </div>


                </div>



            </div>


        </div>


    )
}

export default ViewVenues