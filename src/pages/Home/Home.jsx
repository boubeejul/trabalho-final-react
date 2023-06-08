import { Header } from "../../global/components/Header"
import { Menu } from "../../global/components/Menu"
import { Footer } from "../../global/components/Footer"
import { Images } from "./component/carousel"
import { Container, SliderContainer, Text, Hr } from "./style"
import { SlideCard } from "./component/ProductCarousel"

export function Home() {
    return (
        <>
        <Header></Header>
        <Menu></Menu>      
        <Images/>

        <Container>
            {/* <Info></Info> */}
            <SliderContainer>
                <Text>Mais Vendidas</Text>
                <Hr/>
                <SlideCard/>
            </SliderContainer>
            <SliderContainer>
                <Text>Mais Procuradas</Text>
                <Hr/>
                <SlideCard/>
            </SliderContainer>
            <SliderContainer>
                <Text>Em Promoção</Text>
                <Hr/>
                <SlideCard/>
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
  
  