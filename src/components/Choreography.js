import React, { Component } from 'react';

class Choreography extends Component {
    render() {
        return (
            <div className='choreographyBox'>
                <div className='choreoInfo'>
                    <h1>Choreography</h1>
                    <div>
                        <p>Info about choreography here</p>
                        <a href='https://www.youtube.com/channel/UC8xNbEoYzayoDrhc1DALmrg'>
                            <div class='divButton'>Watch More</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Choreography;