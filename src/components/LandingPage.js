import React, { Component } from 'react';


class LandingPage extends Component {
    render() {
        return (
            <div className='landingPage'>
                <div className="hero">
                    <h1>Atarius
                        <br/>
                        Armstrong
                    </h1>
                    <h3>performer. teacher. creative.</h3>
                </div>
                <img className='downArrow' src='images/icons/down.png' alt=''/>
            </div>
        );
    }
}

export default LandingPage;