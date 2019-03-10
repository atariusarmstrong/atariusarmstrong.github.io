import React, { Component } from 'react';
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
            <div className='choreographyBox'>
                <div className='choreoInfo'>
                    <h1>Choreography</h1>
                    <div>
                        <p>Info about choreography here</p>
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