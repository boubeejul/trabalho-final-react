import { Header } from "../../global/components/Header"
import { Menu } from "../../global/components/Menu"
import { Footer } from "../../global/components/Footer"
import { CarouselHome } from "./components/Carousel/CarouselHome"
import { Container, SliderContainer } from "./style"
import { SlideCard } from "./components/Carousel/SlideCard"

export function Home() {

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <CarouselHome />

            <Container>
                {/* <Info></Info> */}
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
                {/* <Publi>
                <Promo></Promo>
                <Promo></Promo>
            </Publi> */}
            </Container>

            <Footer></Footer>
        </>
    )
}

