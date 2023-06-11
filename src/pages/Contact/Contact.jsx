import { Container, ContainerInput, MesageInput } from './style'
import { Footer } from "../../global/components/Footer";


export function Contact() {

    return (
        <>
            <Container>
                <h3>Contato</h3>

                <ContainerInput>

                    <input
                        type="text"
                        id="yourName"
                        name="name"
                        placeholder="Seu Nome"
                    ></input>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Assunto"
                    ></input>

                    <MesageInput>
                    <textarea
                        type="text"
                        id="mesage"
                        className='mesage'
                        name="mesage"
                        placeholder="Digite sua mensagem"
                    ></textarea>
                    </MesageInput>
                </ContainerInput>
                <button>Enviar</button>
            </Container>
        </>
    )
}