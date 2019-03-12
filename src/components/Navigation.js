import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
class Navigation extends Component {
    render() {
        return (
            <Navbar sticky='top'  className='navigation justify-content-between'>
                <Navbar.Brand className='navHeader'>Atarius Armstrong</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#aboutme'>About</Nav.Link>
                    <Nav.Link href='#choreography'>Choreography</Nav.Link>
                    <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;