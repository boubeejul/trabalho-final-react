import { Container, ContainerInfo, footer } from "./style"
import Twitter from "../../../assets/twitter.svg"
import Facebook from "../../../assets/facebook.svg"
import Instagram from "../../../assets/instagram.svg"
import Tiktok from "../../../assets/tiktok.svg"


export function Footer() {
    return (

        <footer>
            <Container>
                <ContainerInfo>
                    <div>
                        <h1>Redes Sociais</h1>
                        <hr />
                        <a href="https://www.instagram.com/eldritchcard/" target="_blanck"><img src={Twitter} alt="twitter icon" /></a>
                        <a href="https://www.instagram.com/eldritchcard/" target="_blanck"><img src={Facebook} alt="facebook icon" /></a>
                        <a href="https://www.instagram.com/eldritchcard/" target="_blanck"><img src={Instagram} alt="instagram icon" /></a>
                        <a href="https://www.instagram.com/eldritchcard/" target="_blanck"><img src={Tiktok} alt="tiktok icon" /></a>
                    </div>
                    <div>
                        <h1>Contato</h1>
                        <hr />
                        <p>(24)2222-2222</p>
                        <a href="mailto:eldritchcards@gmail.com"><p>eldritchcards@gmail.com</p></a>
                    </div>
                    <div>
                        <h1>Marcas</h1>
                        <hr />
                        <a href="##"><p>Magic</p></a>
                        <a href="##"><p>Pokémon</p></a>
                    </div>
                </ContainerInfo>
                <p>©Serratec - Desenvolvimento Web - Grupo 4 - 2023</p>
            </Container>
        </footer>
    )
}