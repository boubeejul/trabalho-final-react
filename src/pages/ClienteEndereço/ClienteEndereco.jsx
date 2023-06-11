import { Container, ContainerClienteEndereco } from "./style";
import logo from "../../assets/logo_header.png";

import axios from "axios";

export function ClienteEndereço ()

var newClient = {
    nome_completo: "",
    email: "",
    cpf: "",
    telefone: "",
    data_nascimento: "",
  };

  var newEndereço= {
    cep:"",
    rua:"",
    numero:"",
    Complemento:"",
  };
  async function signUp() 
    await axios
      .post(
        "https://trabalho-api-production.up.railway.app/auth/signup",
        newUser
      )
      .then((response) => {
        signupResponse = response;
      })
      .catch((error) => {
        signupResponseError = error;
      });

    if (signupResponse.status == 200) 
      await axios.post(
        "https://trabalho-api-production.up.railway.app/clientes",
        newClient,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWl6IiwiaWF0IjoxNjg2NDMyODQ4LCJleHAiOjE2ODY1MTkyNDh9.91ipAPt_Suq6Hci7jdeQ2IKYwmPcU0gSI1nj425ymOI",
          },
        }
      );
      