import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import posed from 'react-pose'

const WatchMore = posed.div({
    idle: {
        background: 'rgba(159,146,0,0)'},
    hovered: {
        background: 'rgba(159,146,0,1)'
    }
})

class Choreography extends Component {
    state = {
        hovering: false
    }
    render() {
        return (
            <div className='choreographyBox' id='choreography'>
            <h1>Choreography</h1>
                <div>
                    
                    <div>
                            <p className='choreoInfo'>I find research to be a beautiful thing. The ability to get lost in the exploration of diving into a topic fills me with excitement. It is even more fulfilling when this research can be translated into movement - the most universal of languages - and I strive to find the interconnection between storytelling, dance, and the various discoverable topics imaginable. For me, there is beauty in the process of creation and collaboration between dancers and their diverse experiences to ultimately bring forth a unified product filled with their idiosyncrasies.</p>


                            <a href='https://www.youtube.com/channel/UC8xNbEoYzayoDrhc1DALmrg'>
                            <WatchMore class='divButton'
                            pose={this.state.hovering ? "hovered" : "idle"}
                            onMouseEnter={() => this.setState({ hovering: true })}
                            onMouseLeave={() => this.setState({ hovering: false })}
                            >Watch More</WatchMore>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Choreography;