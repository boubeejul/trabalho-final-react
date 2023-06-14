import { useState, useEffect } from "react";
import { Container, PedidoContainer, Produtos, Produto, Info } from "./style";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { clientes, pedidosApi } from "../services/api";

export function Pedido() {
  const id = useParams();
  const user =
    sessionStorage.getItem("user") != null
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  const [cliente, setCliente] = useState({});
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function getCliente() {
      const newCliente = await clientes.get(`/info/${user.email}`);
      setCliente(newCliente.data);
    }

    async function getPedidos() {
      try {
        const newPedidos = await pedidosApi.get(`/dto`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setPedidos(newPedidos.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (sessionStorage.getItem("user")) {
      getCliente();
      getPedidos();
    }
  }, []);

  return (
    <>
      <Container>
        {cliente != null && pedidos != null ? (
          <PedidoContainer>
            <h4>Pedido {id.id}</h4>
            {pedidos.map((pedido) => {
              if (
                pedido.id_pedido == id.id &&
                pedido.id_cliente == cliente.id_cliente
              ) {
                return (
                  <Produtos>
                    {pedido.produtos.map((produto) => {
                      return (
                        <Produto
                          onClick={() => {
                            window.location.href = `/produtos/${produto.id_produto}`;
                          }}
                        >
                          <Info>
                            <h1>Nome: {produto.nome}</h1>
                            <h1>Quantidade: {produto.quantidade}</h1>
                            <h1>Valor: {produto.valor}</h1>
                          </Info>
                        </Produto>
                      );
                    })}
                  </Produtos>
                );
              }
            })}
            <button onClick={() => window.location.href = '/meuspedidos'} id="voltar"><ArrowBackIosIcon/><h4>Voltar</h4></button>
          </PedidoContainer>
        ) : (
          <h1>Não autorizado</h1>
        )}
      </Container>
    </>
  );
}
