import { Container, ContainerCadastro } from "./style";
import logo from "../../assets/logo_header.png";
import { AlertMessage } from "../../global/components/AlertMessage";
import { useState, useRef } from "react";
import { apiAuth, api } from "../services/api";

export function Cadastro() {
  var signupResponse = []; // retorno do cadastro
  const [signupResponseError, setResponseError] = useState()
  const [verify, setVerify] = useState(false)
  const userRef = useRef(null)
  const passwordRef = useRef(null)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const cpfRef = useRef(null)
  const telRef = useRef(null)
  const dateRef = useRef(null)

  var newUser = {
    username: "",
    email: "",
    password: "",
    role: ["user"],
  };

  var newClient = {
    nome_completo: "",
    email: "",
    cpf: "",
    telefone: "",
    data_nascimento: "",
  };

  async function signUp() {
    await apiAuth
      .post(
        "/signup",
        newUser
      )
      .then((response) => {
        signupResponse = response;
      })
      .catch((error) => {
        setResponseError(error.response.data.message)
      });

    if (signupResponse.status == 200) {
      await api.post(
        "/clientes",
        newClient
      );
      setVerify(true)
    }
    // tratar mensagens de erro
  }

  return (
    <Container>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ContainerCadastro>
        <h4>Cadastro</h4>

        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <input ref={nameRef} type="text" id="name" name="name" placeholder="Nome" required></input>
          <input ref={userRef} type="text" id="user" name="user" placeholder="Usuário" required></input>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            placeholder="Senha (mínimo 8 dígitos)"
            required
          ></input>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          ></input>
          <input
            ref={cpfRef}
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            required
          ></input>
          <input
            ref={telRef}
            type="tel"
            id="tel"
            name="tel"
            placeholder="Telefone"
            required
          ></input>
          <input
            ref={dateRef}
            type="date"
            id="date"
            name="date"
            placeholder="Data de Nascimento"
            required
          ></input>

          <button type="submit"
            onClick={() => {
              if (
                userRef.current.value != "" &&
                nameRef.current.value != "" &&
                cpfRef.current.value != "" &&
                telRef.current.value != "" &&
                emailRef.current.value != "" &&
                dateRef.current.value != "" &&
                passwordRef.current.value != ""
              ) {
                newUser.password = passwordRef.current.value;
                newUser.username = userRef.current.value;
                newUser.email = emailRef.current.value;

                newClient.nome_completo = nameRef.current.value;
                newClient.cpf = cpfRef.current.value;
                newClient.data_nascimento = dateRef.current.value;
                newClient.email = emailRef.current.value;
                newClient.telefone = telRef.current.value;
                signUp();
              }
            }}
          >
            Cadastrar
          </button>
          <br />
          {
          signupResponseError != null ? (
            <AlertMessage type="error" message={signupResponseError}/>
          ) : (
            null
          )
        }
        {
          verify ? (
            <AlertMessage type="success" message="Conta cadastrada com sucesso!"/>
          ) : (
            null
          )
        }
        </form>
        <a href="/login">Fazer login</a>
      </ContainerCadastro>
    </Container>
  );
}