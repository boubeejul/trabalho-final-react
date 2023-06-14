import { Container, ContainerLogin } from "./style";
import logo from "../../assets/logo_header.png";
import { AlertMessage } from "../../global/components/AlertMessage";
import { useState, useRef } from "react";
import { apiAuth } from "../services/api";

export function Login() {
  const [loginResponseError, setResponseError] = useState()
  var loginResponse = []
  const userRef = useRef(null)
  const passwordRef = useRef(null)

  async function verifyLogin(user, password) {
    await apiAuth
      .post("/signin", {
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
            <AlertMessage type="error" message="Verifique usuário e senha!"/>
          ) : (
            null
          )
        }
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <input
            ref={userRef}
            type="text"
            id="user"
            name="user"
            placeholder="Usuário"
            required
          ></input>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          ></input>

          <button id="continue" type="submit"
            onClick={() => { 
              if (userRef.current.value != "" && passwordRef.current.value != "" )
                verifyLogin(userRef.current.value, passwordRef.current.value)
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
