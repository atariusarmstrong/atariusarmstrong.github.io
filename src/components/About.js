import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <div className='bioBlock'>
               <img className='headshot' src='images/AtariusArmstrong.jpg' alt="Atarius Armstrong"/>
                <div>
                    <div>
                        <h2>About Me</h2>
                    </div>
                    <div className='bio'>
                        <Container>
                            <Row>
                                I’m Atarius Armstrong - a performing artist turned full stack web developer. I utilize tech as a form of creative medium in addition to my passion for musical theatre performance and choreography. I'm currently a candidate in the Equity Membership Candidate Program and currently work as a freelance dance instructor in the Metro Atlanta area specializing in musical theatre, jazz, contemporary, and modern.
                            </Row>
                            <Row>
                                <Col>
                                    <div className='resumeButton'>Developer Resume</div>
                                </Col>
                                <Col>
                                    <div className='resumeButton'>Choreographer Resume</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    
                </div>
                
            </div>
        );
    }
}

export default About;