import { Container, Wrap, Options } from "./style"
import { Categories } from "../Categories"
export function Menu() {
    return (
        <>
            <Container>
                <Wrap>
                    <Categories type="header"></Categories> 
                    <Options>
                        <a href="/about"><span>Sobre </span></a>
                        <span> | </span>
                        <a href="/contact"><span> Contato</span></a>
                    </Options>
                </Wrap>
            </Container>
        </>
    )
}