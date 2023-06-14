import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import promoOne from '../../../../assets/PromoOne.png'
import promoTwo from '../../../../assets/PromoTwo.png'
import promoThree from '../../../../assets/PromoThree.png'
import promoFour from '../../../../assets/PromoFour.png'
import promoFive from '../../../../assets/PromoFive.png'
import './style.css'
  
export function CarouselHome() {
  return (
    <div>
      <Carousel pause = 'hover' controls={false}>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoTwo}
            alt="imagem um"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoOne}
            alt="imagem dois"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoFour}
            alt="imagem três"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoThree}
            alt="imagem quatro"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
            src={promoFive}
            alt="imagem cinco"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}