import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"

// import required modules
import { Pagination } from "swiper";;

export function SlideCard() {

  const [randomCards, setRandomCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      let {data: card} = await axios.get("https://trabalho-api-production.up.railway.app/produtos/dto")
      // setCards(card)
      for (let i = card.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [card[i], card[j]] = [card[j], card[i]];
      }  
      setRandomCards(card.slice(0,8));
      console.log(newRandom)
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
          randomCards.map(card => {
            console.log(randomCards)
            return (
                <SwiperSlide>
                  <Link to={`/produto/${card.id}`}> <img src={`https://trabalho-api-production.up.railway.app/upload/view/${card.id_imagem}`}/></Link>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}