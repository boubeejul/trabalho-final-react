import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { api } from "../../../services/api"
//import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"

// import required modules
import { Pagination } from "swiper";;

export function SlideCard() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data: card} = await axios.get("https://trabalho-api-production.up.railway.app/produtos/dto")
      setCards(card)
    }

    fetchData()
  },[])

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        modules={[Pagination]}
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

        {
          cards.map(card => {
            return (
                <SwiperSlide>
                  <Link to={`/produto/${card.id}`}> <img src={`https://trabalho-api-production.up.railway.app/upload/view/${card.id_imagem}`}/></Link>
                </SwiperSlide>
            )
          })
        }

       {/* <SwiperSlide>
          <img src="https://trabalho-api-production.up.railway.app/upload/view/2"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://trabalho-api-production.up.railway.app/upload/view/3"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-24d5bad6739ed4aa5dc385cf4ceb3567-lq"/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}