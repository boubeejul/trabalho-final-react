import { Container, ContainerLogin } from './style'
import logo from "../../assets/logo_header.png";
import axios from "axios";

export function Login() {

    var loginResponse = []
    var loginResponseError = []

    async function verifyLogin(user, password) {
        await axios.post("https://trabalho-api-production.up.railway.app/auth/signin", {

            "username": user,
            "password": password,

        }).then(response => {
            loginResponse = response
        }).catch(error => {
            loginResponseError = error
        })

        if (loginResponse.status == 200) {
            sessionStorage.setItem("user", JSON.stringify(loginResponse.data))
            alert("Login realizado com sucesso!")
            window.location.href = "/"
        } else if (loginResponseError.response.status == 401) {
            alert("Verifique seu usuário e senha!")
        }
    }

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
                        required
                    ></input>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        required
                    ></input>

                    <button onClick={() => {
                        if (document.querySelector("#user").value != "" && document.querySelector("#password").value != "")
                            verifyLogin(document.querySelector("#user").value, document.querySelector("#password").value)
                    }}>Continuar</button>

                    <a href='/cadastro'>Criar conta</a>

                </ContainerLogin>
            </Container>
    )
}