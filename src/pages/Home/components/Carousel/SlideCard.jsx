import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"
import { apiCards } from "../../../services/api"

// import required modules
import { Navigation } from "swiper";;

export function SlideCard() {

  const [randomCards, setRandomCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      let {data: card} = await apiCards.get("https://trabalho-api-production.up.railway.app/produtos/dto")
      for (let i = card.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [card[i], card[j]] = [card[j], card[i]];
      }  
      setRandomCards(card.slice(0,8));
    }
    fetchData()
  },[])


  

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        observer={true}
        observeParents={true}
        parallax={true}
        className="mySwiper"
        breakpoints= {{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 3
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 3
          },

          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 3
          },

          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            spaceBetween: 3
          },

          // when window width is >= 2400px
          2400: {
            slidesPerView: 7,
            spaceBetween: 3
          }
        }}
      >
{/* ${card.id} */}
        {
          randomCards.map(card => {
            return (
                <SwiperSlide>
                  <Link to={`/product/`}> <img src={`https://trabalho-api-production.up.railway.app/upload/view/${card.id_imagem}`}/></Link>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}