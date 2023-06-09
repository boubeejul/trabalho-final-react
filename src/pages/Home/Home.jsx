import { Header } from "../../global/components/Header"
import { Menu } from "../../global/components/Menu"
import { Footer } from "../../global/components/Footer"
import { CarouselHome } from "./components/Carousel/CarouselHome"
import { Container, Info, SliderContainer, Publi } from "./style"
import { SlideCard } from "./components/Carousel/SlideCard"
import VendaRapida from '../../assets/vendarapida.svg'
import Publicidade1 from '../../assets/PromoBanner.png'
import Publicidade2 from '../../assets/PromoBanner2.png'

export function Home() {

    return (
        <>

            <CarouselHome />
            <Container>
                <Info>
                    <img src={VendaRapida} alt="" />
                </Info>
                <SliderContainer>
                    <h4>Mais Vendidas</h4>
                    <SlideCard />
                </SliderContainer>
                
                <SliderContainer>
                    <h4>Mais Procuradas</h4>
                    <SlideCard />
                </SliderContainer>
                <SliderContainer>
                    <h4>Mais Raras</h4>
                    <SlideCard />
                </SliderContainer>
                <Publi>
                <img src={Publicidade1} alt="" />
                <img src={Publicidade2} alt="" />
            </Publi>

                {/* <Coments></Coments> */}

            </Container>

            <Footer></Footer>
        </>
    )
}

