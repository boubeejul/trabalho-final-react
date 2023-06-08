import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import promoOne from '../../../assets/promoOne.svg'
  
export function Images() {
  return (
    <div>
      <Carousel pause = 'hover' controls={false}>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="Image One"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}