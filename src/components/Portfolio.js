import React, { Component } from 'react';
import posed, {PoseGroup} from 'react-pose'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { keyframes } from 'popmotion';

//I want make each div move from left to right
//Once it reaches the right it should disappear and show the next project

// const Project = posed.div({
//     transition: {
//         type: keyframes,
//         values: [0, 3, 10],
//         min: 2,
//         max: 9
//     },
//     left: {
//         x: -100,
//         opacity: 1
//     },
//     right: {
//         x: 100,
//         opacity: 0,
//     }
// })

const Project = posed.div({
    enter: {opacity: 1},
    exit: {opacity: 0}
})
const List = posed.ul({
    open:
        {x: '0%',
        delayChildren: 200,
        staggerChildren: 500
    },
    closed: {x: '-100%', delay: 300}
})

const Skill = posed.li({
    open: {y: 0, opacity: 1},
    closed: {y: 20, opacity: 0}
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
        position: true,
        isOpen: false
    }

    componentWillMount = () => {
        setTimeout(this.toggle, 1000)
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })
    // componentDidMount = () => {
    //     setInterval(() => {
    //         this.setState({position: !this.state.position});
    //     }, 1000)
    // }
    render() {
        return (
            <div className='portfolio'>
                <h2>Recent Projects</h2>
                <Container>
                    <Row>
                        <Col>
                            <List pose={this.state.isOpen ? 'open' : 'closed'}>
                                <Skill>Full Stack Web Development</Skill>
                                <Skill>User Interface Design</Skill>
                                <Skill>Logo & Branding</Skill>
                            </List>
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