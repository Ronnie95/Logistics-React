import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand as={Link} to="/home">
                    Logistics
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/routes">
                            Routes
                        </Nav.Link>

                        <Nav.Link as={Link} to="/Maintenance">
                            Maintenance
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;