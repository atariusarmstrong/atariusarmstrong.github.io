import React, { Component } from 'react';
import posed, {PoseGroup} from 'react-pose'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PortfolioCarousel from './PortfolioCarousel';



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
        position: true,
        isOpen: false
    }

    componentWillMount = () => {
        setTimeout(this.toggle, 1000)
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <div className='portfolio' id='portfolio'>
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
                            <PortfolioCarousel/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Portfolio;