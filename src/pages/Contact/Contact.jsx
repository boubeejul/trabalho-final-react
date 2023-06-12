import { Container, ContainerInput, MesageInput } from './style'
import { Footer } from "../../global/components/Footer";


export function Contact() {

    return (
        <>
            <Container>
                <h3>Contato</h3>

                <ContainerInput>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    }}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                        required
                    ></input>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Assunto"
                        required
                    ></input>

                    <textarea
                        type="text"
                        id="mesage"
                        className='mesage'
                        name="mesage"
                        placeholder="Digite sua mensagem"
                        required
                    ></textarea>
                <button type="submit" onClick={() =>{ alert("Mensagem enviada!")}}>Enviar</button>
                </form>
                </ContainerInput>
            </Container>
        </>
    )
}