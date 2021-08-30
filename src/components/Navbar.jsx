import React from 'react';
import logo from "./images/logo.png";
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import './navbar.css';
import { Home, Email, Notifications, AccountCircle, Search } from "@material-ui/icons";



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
                        <Nav.Link href="#action1" className="text-white"> {<Home />} Home</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Link</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search here"
                            className="mr-2"
                            aria-label="Search"

                        />
                        <Button variant="outline-danger">{<Search />}</Button>

                    </Form>
                    <Nav.Link href="#action1" className="text-white"> {<Email />} </Nav.Link>
                    <Nav.Link href="#action1" className="text-white"> {<Notifications />} </Nav.Link>
                    <Nav.Link href="#action1" className="text-white"> {< AccountCircle />} </Nav.Link>

                </Navbar.Collapse>
            </Navbar>

        </>

    )
}
export default Topbar;