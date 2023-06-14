import {
  Container,
  CostumerInfo,
  PersonalInfo,
  Adress,
  NewAdress,
} from "./style";
import { useState, useEffect } from "react";
import { AlertMessage } from "../../global/components/AlertMessage";
import { clientes, api } from "../services/api";

export function Costumer() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [verify, setVerify] = useState(true);
  var cadastrarResponse = [];
  var cadastrarError =[];
  const user = sessionStorage.getItem('user') != null ? (JSON.parse(sessionStorage.getItem("user"))) : (null)

  var newEndereco = {
    cep: "",
    numero: ""
  };

  if (sessionStorage.getItem("user") != null) {
    useEffect(() => {
      async function getInfo() {
        const getUserInfo = await clientes.get(
          `/info/${user.email}`
        );
        setUserInfo(getUserInfo);
        setIsLoading(false);
      }

      getInfo();
    }, []);
  }

  async function cadastrarEndereco() {
    await api
      .post(
        "/enderecos",
        newEndereco,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        cadastrarResponse = response.data;
        updateCliente();
      })
      .catch((error) => {
        cadastrarError = error;
        setVerify(false)
      })
  }

  async function updateCliente() {
    var upCliente = {
      ...userInfo.data,
      endereco: { id_endereco: cadastrarResponse.id_endereco },
    };
    await api.put(
      "/clientes",
      upCliente
    )
    location.reload()
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
            ) : <span>Você não possui endereço cadastrado. Para realizar um pedido, cadastre um abaixo.</span>}

            <NewAdress>
              <h5>Atualizar/Cadastrar Endereço</h5>
              {
                !verify ? (
                  <>
                    <br />
                    <AlertMessage type="error" message="Dados inválidos, tente novamente" />
                  </>
                ) : (
                  null
                )
              }
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