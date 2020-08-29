import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class DashboardCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval ="3000">
                    <img
                        className="d-block w-100"
                        src={require('./../assets/images/school_girl.jpg')}
                        alt="First slide"
                        height="600"
                    />
                 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../assets/images/school_girl.jpg')}
                        alt="Third slide"
                        height="600"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../assets/images/school_girl.jpg')}
                        alt="Third slide"
                        height="600"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}