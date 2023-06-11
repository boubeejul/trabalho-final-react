import { Container, CostumerInfo, PersonalInfo, Adress, NewAdress } from "./style"
import { useState, useEffect } from "react";
import axios from "axios";

export function Costumer() {

    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    if (sessionStorage.getItem("user") != null) {

        useEffect(() => {
            const user = JSON.parse(sessionStorage.getItem("user"))

            async function getInfo() {
                const getUserInfo = await axios
                    .get(`https://trabalho-api-production.up.railway.app/clientes/info/${user.email}`,
                        {
                            headers: {
                                Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWl6IiwiaWF0IjoxNjg2NTExMDMzLCJleHAiOjE2ODY1OTc0MzN9.7oMz7kjqUqQmiKNe0pjkrUhI0SEGN2m1uLPzrQSe6AE",
                            }
                        })
                setUserInfo(getUserInfo.data)
                console.log(getUserInfo)
                setIsLoading(false)
            }

            getInfo()

        }, [])
    }
    return (
        <Container>
            <CostumerInfo>
                <h4>Meus Dados</h4>

                {
                    isLoading ? (
                        null
                    ) : (
                        <>
                            <PersonalInfo>
                                <span><span>Nome completo: </span>{userInfo.nome_completo}</span>
                                <span><span>Email: </span>{userInfo.email}</span>
                                <span><span>Telefone: </span>{userInfo.telefone}</span>
                                <span><span>Data de nascimento: </span>{userInfo.data_nascimento}</span>
                            </PersonalInfo>

                            {
                                userInfo.endereco != null ? (
                                    <Adress>
                                    <div>
                                        <span><span>Rua: </span>{userInfo.endereco.logradouro}</span>
                                        <span><span>Bairro: </span>{userInfo.endereco.bairro}</span>
                                        <span><span>Nº: </span>{userInfo.endereco.numero}</span>
                                        <span><span>CEP: </span>{userInfo.endereco.cep}</span>
                                    </div>
                                    <div>
                                        <span><span>Cidade: </span>{userInfo.endereco.localidade}</span>
                                        <span><span>UF: </span>{userInfo.endereco.uf}</span>
                                        <span><span>Complemento: </span>{userInfo.endereco.complemento}</span>
                                    </div>
                                </Adress>
                                ) : (
                                    null
                                )
                            }
                                

                            <NewAdress>
                                <h5>Atualizar/Cadastrar Endereço</h5>

                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                }}>
                                    <input type="text" id="cep" name="cep" placeholder="CEP" required></input>
                                    <input type="number" id="number" name="number" placeholder="Número (se tiver)"></input>
                                    <button type="submit">Atualizar Endereço</button>
                                </form>
                            </NewAdress>
                        </>
                    )
                }
            </CostumerInfo>
        </Container>
    )
}