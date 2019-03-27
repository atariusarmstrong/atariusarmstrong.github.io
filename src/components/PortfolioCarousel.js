import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


class PortfolioCarousel extends Component {
    state = {
        projects: [{
            title: "Jeopardy",
            description: "A static HTML/CSS/JS replica of the game show jeopardy.",
            url: 'https://github.com/atariusarmstrong/unit1Project',
            image: 'images/Jeopardy.png'
        },
        {
            title: "Bartel",
            description: "Fullstack application using Express & Node.js where users can log their favorite bars to day drink.",
            url: 'https://github.com/atariusarmstrong/bartel',
            image: 'images/bartel.png'
        },
        {
            title: "TripShare",
            description: "Fullstack application utilizing Mongo, Express, React.js, and Node.js for users to log future group travel plans.",
            url: 'https://github.com/atariusarmstrong/trip-share',
            image: 'images/tripshare.png'
        },
        {
            title: 'REA Entertainment',
            description: 'Fullstack application using React.js and Django for a mock website for a theatrical production company.',
            url: 'https://github.com/atariusarmstrong/rea_entertainment',
            image: 'images/rea_entertainment.png'
        },
        {
            title: "Kingdom Kustoms",
            description: "Online store built and designed through the Wix platform. Utilizes Google SEO Analytics and branding through Adobe Photoshop.",
            url: 'https://kingdomkustoms.org',
            image: 'images/kingdomkustoms.png'
        },
        {
            title: "Virtual Javascript Piano",
            description: "Virtual piano created using vanilla Javascript. It works by pressing the corresponding keyboard inputs.",
            url: 'https://github.com/atariusarmstrong/VirtualPiano',
            image: 'images/virtualpiano.png'
        }
    ]
    }
    render() {
        return (
            <div>
                <Carousel>
                    {this.state.projects.map((project, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <a href={project.url}>
                                    
                                    <img src={project.image} alt={project.title} className="d-block carouselImage"/>
                                    <Carousel.Caption className="caption">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </Carousel.Caption>   
                                </a>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

export default PortfolioCarousel;