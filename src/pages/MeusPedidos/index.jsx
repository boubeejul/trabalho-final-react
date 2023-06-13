import React, { useState, useEffect } from "react";
import { Container, PedidosContainer, Pedido } from "./style";
import axios from "axios";

export function MeusPedidos() {
  const usuario =
    sessionStorage.getItem("user") != null
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getPedidos() {
      const newPedidos = await axios.get(
        `https://trabalho-api-production.up.railway.app/pedidos/cliente/${usuario.email}`,
        {
          headers: {
            Authorization: `Bearer ${usuario.accessToken}`,
          },
          // ${user.accessToken}
        }
      );
      setPedidos(newPedidos.data);
      setIsLoading(true)
    }
    if (usuario != null) {
      getPedidos();
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
                    pedidos.reverse().map(pedido => {
                        return(
                            <Pedido>
                                <span><span>Número do pedido:</span> {pedido.id_pedido}</span>
                                <span><span>Data do Pedido: </span>{pedido.data_pedido}</span>
                                <span><span>Status: </span>{pedido.status}</span>
                                <span><span>Valor: </span>R${(pedido.valor_total).toFixed(2)}</span>
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
