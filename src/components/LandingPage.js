import React, { Component } from 'react';
import posed from 'react-pose'
import { linear } from '@popmotion/easing';

const Box = posed.div({
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            ease: linear,
            duration: 300}
    }
})

class LandingPage extends Component {
    state = {
        isVisible: true
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
      }
    
    render() {
        return (
            <div className='landingPage'>
                <div className="hero">
                    <h1>Atarius
                        <br/>
                        Armstrong
                    </h1>
                    <h3>performer. teacher. <Box className='creative' pose={this.state.isVisible ? 'visible' : 'hidden'}>creative.</Box></h3>
                </div>
                <img className='downArrow' src='images/icons/down.png' alt=''/>
            </div>
        );
    }
}

export default LandingPage;