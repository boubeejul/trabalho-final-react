import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'
import { BeforeArrow, NextArrow } from "../../style";

export function SlideCard() {

  var settings = {
    nextArrow: <NextArrow />,
    prevArrow: <BeforeArrow />,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="https://i.ebayimg.com/images/g/7XgAAOSw1qdjTLKR/s-l1600.jpg" className="cardImage"/>
        </div>
        <div>
          <img src="https://cards.scryfall.io/large/front/d/2/d2b4912a-83a2-4870-8fac-81fa79da2830.jpg?1562793639" className="cardImage"/>
        </div>
        <div>
          <img src="https://static.cardkingdom.com/images/magic-the-gathering/war-of-the-spark/bond-of-insight-82452.jpg" className="cardImage"/>
        </div>
        <div>
          <img src="https://cards.scryfall.io/large/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401" className="cardImage"/>
        </div>
        <div>
          <img src="https://cards.scryfall.io/large/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401" className="cardImage"/>
        </div>
      </Slider>
    </div>
  );
}