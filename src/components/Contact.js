import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {SocialIcon} from 'react-social-icons'

class Contact extends Component {
    render() {
        return (
            <footer className='contactBox'>
                <Container>
                    <Row className="justify-content-md-center">
                        <SocialIcon url="http://linkedin.com/in/atariusarmstrong" bgColor='#ACACAC' className='socialIcons' style={{height: 25, width: 25}}/>
                        <SocialIcon url='http://instagram.com/atariusarmstrong' bgColor='#ACACAC' className='socialIcons' style={{height: 25, width: 25}}/>
                        <SocialIcon url='http://facebook.com/atariuslamon' bgColor='#ACACAC' className='socialIcons' style={{height: 25, width: 25}}/>
                        <SocialIcon url='http://github.com/atariusarmstrong' bgColor='#ACACAC' className='socialIcons' style={{height: 25, width: 25}}/>
                    </Row>
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