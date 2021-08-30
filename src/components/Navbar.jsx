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
                        <h5 className="text-white"> {<Home />} Wow: Development: Quality:Assurance: Nepal</h5>


                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Wowdevqa:search.."
                            className="mr-2"
                            aria-label="Search"

                        />
                        <Button variant="outline-danger">{<Search />}</Button>

                    </Form>
                    <div className="icons">
                        <Nav.Link href="#email" className="text-white" id="icon"> {<Email />} </Nav.Link>
                        <Nav.Link href="#notifications" className="text-white" id="icon"> {<Notifications />} </Nav.Link>
                        <Nav.Link href="#account" className="text-white" id="icon"> {< AccountCircle />} </Nav.Link>
                    </div>

                </Navbar.Collapse>
            </Navbar>


        </>

    )
}
export default Topbar;