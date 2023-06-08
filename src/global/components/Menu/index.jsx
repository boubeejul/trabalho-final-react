import { Container, Wrap, Options } from "./style"
import { Categories } from "../Categories"
export function Menu() {
    return (
        <>
            <Container>
                <Wrap>
                    <Categories></Categories>
                    <Options>
                        <span>Sobre </span>
                        <span> | </span>
                        <span> Contato</span>
                    </Options>
                </Wrap>
            </Container>
        </>
    )
}