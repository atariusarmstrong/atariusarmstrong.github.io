import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import posed from 'react-pose'


const Resume = posed.div({
    hoverable: true,
    init: {
        background: 'rgba(159, 146, 0, 0)'
    },
    hover: {
        background: 'rgba(159, 146, 0, 1)'
    }
})

class About extends Component {
    render() {
        return (
            <div className='bioBlock' id='aboutme'>
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
                                    <a href='images/atarius_armstrong.pdf' download target='_blank'>
                                        <Resume className='resumeButton'>Developer Resume</Resume>
                                    </a>
                                </Col>
                                <Col>
                                    <a href='images/atarius_armstrong_actor.pdf' download target='_blank'>
                                        <Resume className='resumeButton'>Performer Resume</Resume>
                                    </a>   
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