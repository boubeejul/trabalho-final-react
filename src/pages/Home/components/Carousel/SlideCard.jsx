import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"
import { apiCards } from "../../../services/api"

// import required modules
import { Navigation } from "swiper";;

export function SlideCard() {

  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data: cards } = await apiCards.get("https://trabalho-api-production.up.railway.app/produtos/dto");
      
      const filteredCards = cards.filter(card => card.categoriaProdDto.nome === "Pokémon" || card.categoriaProdDto.nome === "Magic");
      
      for (let i = filteredCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
      }
      
      setRandomCards(filteredCards.slice(0, 14));
    }
    
    fetchData();
  }, [])


  

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
        scrollbar = {{draggable: true}}
        // parallax={true}
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
            return (
                <SwiperSlide>
                  <Link to={`/produtos/${card.id}`}> <img src={`https://trabalho-api-production.up.railway.app/upload/view/${card.id_imagem}`}/></Link>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}