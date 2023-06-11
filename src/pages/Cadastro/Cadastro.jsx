import { Container, ContainerCadastro } from "./style";
import logo from "../../assets/logo_header.png";

import axios from "axios";

export function Cadastro() {

  var signupResponse = [] // retorno do cadastro
  var signupResponseError = [] // retorno de erros

  var newUser = {
    "username": "",
    "email": "",
    "password": "",
    "role": ["user"]
  }

  var newClient = {
    "nome_completo": "", 
    "email": "",
    "cpf": "", 
    "telefone": "",
    "data_nascimento": ""
  }

    async function signUp() {
        await axios.post("https://trabalho-api-production.up.railway.app/auth/signup", newUser)
        .then(response => {
          signupResponse = response
        }).catch( error => {
          signupResponseError = error
        })

        if (signupResponse.status == 200) {
            await axios.post("https://trabalho-api-production.up.railway.app/clientes", newClient, {
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWl6IiwiaWF0IjoxNjg2NDMyODQ4LCJleHAiOjE2ODY1MTkyNDh9.91ipAPt_Suq6Hci7jdeQ2IKYwmPcU0gSI1nj425ymOI"
              }
            })
            alert("Cadastro realizado com sucesso!")
        }
        // tratar mensagens de erro
    }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerCadastro>
        <h4>Cadastro</h4>

          <input type="text" id="name" name="name" placeholder="Nome"></input>
          <input type="text" id="user" name="user" placeholder="Usuário"></input>
          <input type="password" id="password" name="password" placeholder="Senha" required></input>
          <input type="text" id="email" name="email" placeholder="Email" required></input>
          <input type="text" id="cpf" name="cpf" placeholder="CPF" required></input>
          <input type="tel" id="tel" name="tel" placeholder="Telefone" required></input>
          <input type="date" id="date" name="date" placeholder="Data de Nascimento"></input>


          <button onClick={() => {
                        if (document.querySelector("#user").value != "" && document.querySelector("#password").value != ""
                            && document.querySelector("#email").value != "" && document.querySelector("#name").value != ""
                            && document.querySelector("#cpf").value != "" && document.querySelector("#tel").value != ""
                            && document.querySelector("#date").value != "") {

                            newUser.password = document.querySelector("#password").value
                            newUser.username = document.querySelector("#user").value
                            newUser.email = document.querySelector("#email").value

                            newClient.nome_completo = document.querySelector("#name").value
                            newClient.cpf = document.querySelector("#cpf").value
                            newClient.data_nascimento = document.querySelector("#date").value
                            newClient.email = document.querySelector("#email").value
                            newClient.telefone = document.querySelector("#tel").value

                              signUp()
                            }
                            }}>Cadastrar</button>


        <a href="/login">Fazer login</a>
      </ContainerCadastro>
    </Container>
  );
}
