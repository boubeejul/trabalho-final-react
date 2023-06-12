import {
  Container,
  CostumerInfo,
  PersonalInfo,
  Adress,
  NewAdress,
} from "./style";
import { useState, useEffect } from "react";
import axios from "axios";

export function Costumer() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  var cadastrarResponse = [];
  var cadastrarError = [];

  var newEndereco = {
    cep: "",
    numero: ""
  };

  async function cadastrarEndereco() {
      await axios
        .post(
          "https://trabalho-api-production.up.railway.app/enderecos",
          newEndereco,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY1MjIyNjQsImV4cCI6MTY4NjYwODY2NH0.49XapsPNb2Gdi0ypIOyrYl0jJEPq4Rw-o7FFkeI4ZHw`,
            },
          }
        )
        .then((response) => {
          cadastrarResponse = response.data;
          updateCliente();
        })
        .catch((error) => {
          cadastrarError = error;
          console.log(cadastrarError)
          alert("Dados inválidos ou incompletos");
        })
  }

  async function updateCliente() {
    var upCliente = {
      ...userInfo.data,
      endereco: { id_endereco: cadastrarResponse.id_endereco },
    };
    await axios.put(
      "https://trabalho-api-production.up.railway.app/clientes",
      upCliente,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY1MjIyNjQsImV4cCI6MTY4NjYwODY2NH0.49XapsPNb2Gdi0ypIOyrYl0jJEPq4Rw-o7FFkeI4ZHw`,
        },
      }
    )
    location.reload()
  }

  if (sessionStorage.getItem("user") != null) {
    useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem("user"));

      async function getInfo() {
        const getUserInfo = await axios.get(
          `https://trabalho-api-production.up.railway.app/clientes/info/${user.email}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY1MjIyNjQsImV4cCI6MTY4NjYwODY2NH0.49XapsPNb2Gdi0ypIOyrYl0jJEPq4Rw-o7FFkeI4ZHw",
            },
          }
        );
        setUserInfo(getUserInfo);
        setIsLoading(false);
      }

      getInfo();
    }, []);
  }

  return (
    <Container>
      <CostumerInfo>
        <h4>Meus Dados</h4>

        {isLoading ? null : (
          <>
            <PersonalInfo>
              <span>
                <span>Nome completo: </span>
                {userInfo.data.nome_completo}
              </span>
              <span>
                <span>Email: </span>
                {userInfo.data.email}
              </span>
              <span>
                <span>Telefone: </span>
                {userInfo.data.telefone}
              </span>
              <span>
                <span>Data de nascimento: </span>
                {userInfo.data.data_nascimento}
              </span>
            </PersonalInfo>

            {userInfo.data.endereco != null ? (
              <Adress>
                <div>
                  <span>
                    <span>Rua: </span>
                    {userInfo.data.endereco.logradouro}
                  </span>
                  <span>
                    <span>Bairro: </span>
                    {userInfo.data.endereco.bairro}
                  </span>
                  <span>
                    <span>Nº: </span>
                    {userInfo.data.endereco.numero}
                  </span>
                  <span>
                    <span>CEP: </span>
                    {userInfo.data.endereco.cep}
                  </span>
                </div>
                <div>
                  <span>
                    <span>Cidade: </span>
                    {userInfo.data.endereco.localidade}
                  </span>
                  <span>
                    <span>UF: </span>
                    {userInfo.data.endereco.uf}
                  </span>
                  <span>
                    <span>Complemento: </span>
                    {userInfo.data.endereco.complemento}
                  </span>
                </div>
              </Adress>
            ) : null}

            <NewAdress>
              <h5>Atualizar/Cadastrar Endereço</h5>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="CEP (obrigatório)"
                  required
                ></input>
                <input
                  type="number"
                  id="numero"
                  name="numero"
                  placeholder="Número (se tiver)"
                ></input>
                <button
                  type="submit"
                  onClick={() => {
                    newEndereco = userInfo.data.endereco
                    newEndereco.cep = document.querySelector("#cep").value;
                    newEndereco.numero = document.querySelector("#numero").value;
                    cadastrarEndereco();
                  }}
                >
                  Concluir
                </button>
              </form>
            </NewAdress>
          </>
        )}
      </CostumerInfo>
    </Container>
  );
}
