import React from 'react';
import logo from "./images/logo.png";
import { Nav, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './navbar.css';



function Topbar() {
    return (
        <>
            <Navbar fixed="top" bg="primary" expand="md">
                <Navbar.Brand href="#" className="text-white">
                    <img src={logo} alt="img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search here"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}
export default Topbar;