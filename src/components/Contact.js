import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Contact extends Component {
    render() {
        return (
            <footer className='contactBox'>
                <Container>
                    <Row>
                        <Col>Atarius Armstrong</Col>
                        <Col>Full Stack, UI Web Developer</Col>
                        <Col>atariusarmstrong@gmail.com</Col>
                        <Col>404.603.6093</Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Contact;