import { Header } from "../../global/components/Header"
import { Menu } from "../../global/components/Menu"
import { Footer } from "../../global/components/Footer"
import { CarouselHome } from "./components/Carousel/CarouselHome"
import { Container, Info, SliderContainer, Publi, Comments, Comment } from "./style"
import { SlideCard } from "./components/Carousel/SlideCard"
import VendaRapida from '../../assets/vendarapida.svg'
import Publicidade1 from '../../assets/PromoBanner.png'
import Publicidade2 from '../../assets/PromoBanner2.png'
import maria from '../../assets/maria.png'
import joao from '../../assets/joao.png'
import enzo from '../../assets/enzo.png'

export function Home() {

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <CarouselHome />

            <Container>
                <Info>
                    <img src={VendaRapida} alt="" />
                    <hr></hr>
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

                <Comments>
                    <Comment>
                        <img src={maria} alt="" />
                        <div>
                            <span>Maria Silva</span>
                            <p>Entrega rápida, bem rápida!111!</p>
                        </div>
                    </Comment>
                    <Comment>
                        <img src={joao} alt="" />
                        <div>
                            <span>João Pedro Souza</span>
                            <p>Amei meu pikachu, <br /> veio muito bem embalado</p>
                        </div>
                    </Comment>
                    <Comment>
                        <img src={enzo} alt="" />
                        <div>
                            <span>Enzo Andrade</span>
                            <p>👍</p>
                        </div>
                    </Comment>
                </Comments>

            </Container>

            <Footer></Footer>
        </>
    )
}

