import React, { Component } from 'react';
import posed from 'react-pose'
import { linear } from '@popmotion/easing';
import SplitText from 'react-pose-text'

const Box = posed.div({
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            ease: linear,
            duration: 100}
    }
})

const charPoses = {
    exit: { opacity: 0, y: 80 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 300
    }
  };

class LandingPage extends Component {
    state = {
        isVisible: true,
        titles: [
            'developer',
            'choreographer',
            'creative'
        ]
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
                    <h3>performer. teacher. 
                                    {/* <Box className='creative' pose={this.state.isVisible ? 'visible' : 'hidden'}> */}
                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className='creative'>
                                        creative.
                                    </SplitText>
                                    {/* </Box> */}

                        
                    </h3>
                </div>
                <img className='downArrow' src='images/icons/down.png' alt=''/>
            </div>
        );
    }
}

export default LandingPage;