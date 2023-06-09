import { Container, ContainerLogin } from './style'
import logo from "../../assets/logo_header.png";

export function Login() {

    return (
        <Container>
            <img src={logo} alt='logo' />
            <ContainerLogin>
                <h4>Login</h4>
                <input
                    type="text"
                    id="user"
                    name="user"
                    placeholder="Usuário"
                ></input>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                ></input>

                <button>Continuar</button>

                <a href='##'>Criar conta</a>

            </ContainerLogin>
        </Container>
    )
}