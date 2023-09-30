import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

// import images
import slider1 from '../../images/home/slider/1.jpg'
import slider2 from '../../images/home/slider/2.jpg'
import slider3 from '../../images/home/slider/3.jpg'
import { Link } from 'react-router-dom';

export default function Slider() {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <Link to='/FuturePage'>
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
              draggable = 'false'
            />
            </Link>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to='/FuturePage'>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
              draggable = 'false'
            />

            </Link>
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to='/FuturePage'>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
              draggable = 'false'
            />
            </Link>

            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel> 
    </div>
  )
}
