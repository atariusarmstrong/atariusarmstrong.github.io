import React, { Component } from 'react';
import posed from 'react-pose'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//I want make each div move from left to right
//Once it reaches the right it should disappear and show the next project

const Project = posed.div({
    left: {x: -100},
    right: {x: 100}
})

class Portfolio extends Component {
    state = {
        projects: [{
            title: "Jeopardy",
            description: "A static HTML/CSS/JS replica of the game show jeopardy.",
            url: 'https://github.com/atariusarmstrong/unit1Project',
            image: ''
        },
        {
            title: "Bartel",
            description: "Fullstack application using Express & Node.js where users can log their favorite bars to day drink.",
            url: 'https://github.com/atariusarmstrong/bartel'
        },
        {
            title: "TripShare",
            description: "Fullstack application utilizing Mongo, Express, React.js, and Node.js for users to log future group travel plans.",
            url: 'https://github.com/atariusarmstrong/trip-share'
        },
        {
            title: 'REA Entertainment',
            description: 'Fullstack application using React.js and Django for a mock website for a theatrical production company.',
            url: 'https://github.com/atariusarmstrong/rea_entertainment'
        }],
        position: true
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({position: !this.state.position});
        }, 1000)
    }
    render() {
        return (
            <div className='portfolio'>
                <h2>Recent Projects</h2>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>Full Stack Web Development</li>
                                <li>User Interface Design</li>
                                <li>Logo & Branding</li>
                            </ul>
                        </Col>
                        
                        <Col className='projectContainer'>
                            {this.state.projects.map((project, i) => {
                                return (
                                    <a href={project.url}>
                                        <Project key={i} className='projectBox' pose={this.state.position ? 'left' : 'right'}>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </Project>
                                    </a>
                            )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Portfolio;