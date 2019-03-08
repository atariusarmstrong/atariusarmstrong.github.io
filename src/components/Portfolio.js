import React, { Component } from 'react';

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
        }
    ]
    }
    render() {
        return (
            <div>
                <h2>Recent Projects</h2>
                <div>
                    <ul>
                        <li>Full Stack Web Development</li>
                        <li>User Interface Design</li>
                        <li>Logo & Branding</li>
                    </ul>
                </div>
                
                <div className='projectContainer'>
                    {this.state.projects.map((project, i) => {
                        return (
                            <a href={project.url}>
                                <div key={i} className='projectBox'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                    )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;