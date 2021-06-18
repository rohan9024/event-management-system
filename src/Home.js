import React from 'react'

import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Carousel, LINK, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'
import { useStateValue } from "./StateProvider"
import { Avatar } from "@material-ui/core"
import logo from "./logo.png"
import "./Home.css"
import carousal from "./carousal.png"
import axios from "axios";


function Home() {
    const [{ user }] = useStateValue();
    const handleUser = () => {
        const username = user?.displayName;
        const useremail = user?.email;

        let userdetails = {
            "username": username,
            "useremail": useremail,

        }

        axios
            .post("http://localhost:5004/user", userdetails)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }
    handleUser();




    return (
        <>
            <div className="navbar">
                <Navbar bg="dark" variant="dark">
                    <img className="nav__logo" src={logo} alt="logo" />
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/bookevents">
                            <Nav.Link>Book Event</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/viewvenues">
                            <Nav.Link>View Venues</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/feedback">
                            <Nav.Link>Feedback</Nav.Link>
                        </LinkContainer>
                        <section className="login__nav">
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </section>
                        <span className="nav__avatar">
                            <Avatar
                                alt={user?.displayName}
                                src={user?.photoURL}
                            />
                            <h3>{user?.displayName}</h3>
                        </span>

                    </Nav>



                </Navbar>

            </div>





            <img
                className="img1"
                src={carousal}
                alt="First slide"
            />
            <hr />


        </>


    )
}

export default Home
