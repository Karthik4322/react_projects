import React from 'react'
import { Carousel } from "react-bootstrap";
import chich from '../assets/images/chichen itza.webp';
import china from '../assets/images/china.jfif';
import pyramid from '../assets/images/pyramid.jfif';
const MyCarouselComp = () => {
    return (
        <div>
     <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src ={"chich"} alt ="chich itza" height="200px" width="200px"/>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src ={"china"} alt ="china" height="200px" width="200px"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src ={"pyramid"} alt ="pyramid" height="200px" width="200px"/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MyCarouselComp
