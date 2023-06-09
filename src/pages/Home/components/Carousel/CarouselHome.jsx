import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import promoOne from '../../../../assets/PromoOne.png'
import promoTwo from '../../../../assets/PromoTwo.png'
import promoThree from '../../../../assets/PromoThree.png'
import promoFour from '../../../../assets/PromoFour.png'
import './style.css'
  
export function CarouselHome() {
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
            src={promoTwo}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoThree}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoFour}
            alt="Image One"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}