import { Container, ContainerLogin } from "./style";
import logo from "../../assets/logo_header.png";
import axios from "axios";
import { AlertMessage } from "../../global/components/AlertMessage";
import { useState } from "react";

export function Login() {
  //var loginResponse = [];
  //var loginResponseError = [];

  const [loginResponseError, setResponseError] = useState()
  var loginResponse = []

  async function verifyLogin(user, password) {
    await axios
      .post("https://trabalho-api-production.up.railway.app/auth/signin", {
        username: user,
        password: password,
      })
      .then((response) => {
       loginResponse = response
      })
      .catch((error) => {
        setResponseError(error)
      });

      if(loginResponse.status == 200) {
        sessionStorage.setItem("user", JSON.stringify(loginResponse.data))
        window.location.href = "/"
      }
  }

  return (
    <Container>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ContainerLogin>
        <h4>Login</h4>

        {
          loginResponseError != null ? (
            <AlertMessage/>
          ) : (
            null
          )
        }
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
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

          <button id="continue" type="submit"
            onClick={() => {
                verifyLogin(
                  document.querySelector("#user").value,
                  document.querySelector("#password").value
                );
            }}
          >
            Continuar
          </button>
        </form>

        <a href="/cadastro">Criar conta</a>
      </ContainerLogin>
    </Container>
  );
}
