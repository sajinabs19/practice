import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../static/images/1.jpg';
import img2 from '../../static/images/2.jpg'
import img3 from '../../static/images/3.jpg'

export const mySlider:React.FC<{}>=()=>{
    return <>
    <Carousel>
    <Carousel.Item> 
      <img width="100%" height="400px" src={img1} />
    
    <Carousel.Caption>
        <h3>First slide </h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
      <img width="100%" height="400px" src={img2} />
        <Carousel.Caption>
            <h3>Second Slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
      <img width="100%" height="400px" src={img3} />
        <Carousel.Caption>
            <h3>Third Slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
    </>
}