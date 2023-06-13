import React, { useState, useEffect } from "react";
import { Container, PedidosContainer, Pedido } from "./style";
import axios from "axios";

export function MeusPedidos() {
  const usuario =
    sessionStorage.getItem("user") != null
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  const [cliente, setCliente] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getCliente() {
      const newCliente = await axios.get(
        `https://trabalho-api-production.up.railway.app/clientes/info/${usuario.email}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY2MTMyMzksImV4cCI6MTY4NjY5OTYzOX0.p03QAywUkG7oJqCkwIhQ0jH5qn5xOgQJhAYwz0pTM1Y`,
          },
          // ${user.accessToken}
        }
      );
      setCliente(newCliente.data);
      setIsLoading(true)
    }
    if (usuario != null) {
      getCliente();
    }
  }, []);

  return (
    <Container>
      {usuario != null ? (
        <>
          <h4>Meus pedidos: </h4>
          <PedidosContainer>
            {
                isLoading ? (
                    cliente.pedidos.reverse().map(pedido => {
                        return(
                            <Pedido>
                                <h1>Número do pedido: {pedido.id_pedido}</h1>
                                <h1>Data do Pedido: {pedido.data_pedido}</h1>
                                <h1>Status: {pedido.status}</h1>
                                <h1>Valor: {pedido.valor_total}</h1>
                            </Pedido>
                        )
                    })
                ) : (<h1>Carregando</h1>)
            }
          </PedidosContainer>
        </>
      ) : (<h1>Você deve fazer login!</h1>)}
    </Container>
  );
}
