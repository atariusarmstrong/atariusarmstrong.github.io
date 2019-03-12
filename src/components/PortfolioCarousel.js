import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'

// const Container = styled.div`
//     position: relative;
//     overflow: hidden;
//     width: 700px;
//     height: 500px;
//     img {
//         width: 700px;
//         height: 500px;
//     }
// `

// const CarouselUI = ({ children }) => <Container>{children}</Container>;
// const Carousel = makeCarousel(CarouselUI);

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
            image: ''
        }]
    }
    render() {
        return (
            <div>
                {/* <Carousel defaultWait={5000} className='carousel'>
                    {this.state.projects.map((project, i ) => {
                        return (
                                <Slide right>
                                
                                    <div key={i}>
                                        <a href={project.url}>
                                            <h3>{project.title}</h3>
                                            <img src={project.image} alt={project.title}/>
                                            <p>{project.description}</p>
                                        </a>
                                    </div>
                                
                                </Slide>
                        )
                    })}
                </Carousel> */}
                <Carousel>
                    {this.state.projects.map((project, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <a href={project.url}>
                                    
                                    <img src={project.image} alt={project.title} className="d-block w-100"/>
                                    <Carousel.Caption>
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