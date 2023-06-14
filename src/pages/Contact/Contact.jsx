import { Container, ContainerInput} from './style'
import { AlertMessage } from '../../global/components/AlertMessage'
import { useState } from 'react'

export function Contact() {

    const[verify, setVerify] = useState(false)

    return (
        <>
            <Container>
                <h3>Contato</h3>

                {
                    verify ? (
                        <AlertMessage type="success" message="Mensagem enviada, aguarde nosso retorno :)!" />
                    ) : (
                        null
                    )
                }
                
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
                <button type="submit" onClick={() =>{ setVerify(true) }}>Enviar</button>
                </form>
                </ContainerInput>
            </Container>
        </>
    )
}