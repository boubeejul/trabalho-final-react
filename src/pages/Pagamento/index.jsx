import React, { useState, useEffect } from "react";
import { Container, InputsContainer, Card, Info } from "./style.js";
import axios from "axios";

export function Pagamento() {
  const [cart, setCart] =
    sessionStorage.getItem("cart") != null
      ? useState(JSON.parse(sessionStorage.getItem("cart")))
      : useState();
  const [user, setUser] =
    sessionStorage.getItem("user") != null
      ? useState(JSON.parse(sessionStorage.getItem("user")))
      : useState();
  const [client, setClient] = useState({});
  // const [purchase, setPurchase] = useState({});
  // const [products, setProducts] = useState([]);

  //Pegando as informações de cliente e fazendo a lista de produtos
  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      async function getCliente() {
        const cliente = await axios.get(
          `https://trabalho-api-production.up.railway.app/clientes/info/${user.email}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY2MTMyMzksImV4cCI6MTY4NjY5OTYzOX0.p03QAywUkG7oJqCkwIhQ0jH5qn5xOgQJhAYwz0pTM1Y`,
            },
            // ${user.accessToken}
          }
        );
        setClient(cliente.data);
      }

      // function getProdutos() {
      //   const lista = [];
      //   cart.listaProdutos.forEach((item) => {
      //     lista.push(item.produto);
      //   });
      //   setProducts(lista);
      //   console.log(products)
      // }

      // getProdutos();
      getCliente();
    }
  }, []);

  //Função para criar ItemPedido
  async function fazerItemPedido(item, id) {
    try {
      const itemPedido = await axios.post(
        `https://trabalho-api-production.up.railway.app/itemPedidos`,
        {
          quantidade: item.quantidade,
          preco_venda: item.valor,
          percentual_desconto: 0,
          valor_bruto: item.valor*item.quantidade,
          valor_liquido: item.quantidade * item.valor,
          produto: {
            id_produto: item.id_produto
          },
          pedido: {
            id_pedido: id
          }
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY2MTMyMzksImV4cCI6MTY4NjY5OTYzOX0.p03QAywUkG7oJqCkwIhQ0jH5qn5xOgQJhAYwz0pTM1Y`,
          },
          // ${user.accessToken}
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  //Função de criar pedido
  async function concluir() {
    var valor = 0;
    var data = new Date;
    var dataString = `${data.getFullYear()}-${String(data.getMonth()+1).padStart(2,'0')}-${data.getDate()+1}`
    cart.listaProdutos.forEach((item) => {
      valor += item.produto.valor * item.produto.quantidade;
    });
    const criarPedido = {
        data_pedido: dataString,
        data_envio: dataString,
        data_entrega: dataString,
        status: "Separação",
        cliente: { id_cliente: client.id_cliente }
      }
    try {
      const pedido = await axios.post(
        `https://trabalho-api-production.up.railway.app/pedidos`,
        criarPedido,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvYWRtaW4iLCJpYXQiOjE2ODY2MTMyMzksImV4cCI6MTY4NjY5OTYzOX0.p03QAywUkG7oJqCkwIhQ0jH5qn5xOgQJhAYwz0pTM1Y`,
          },
          // ${user.accessToken}
        }
      );
      // setPurchase(pedido.data);

      cart.listaProdutos.forEach((item) => {
        fazerItemPedido(item.produto, pedido.data.id_pedido);
      }
      )
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      {sessionStorage.getItem("user") != null &&
      sessionStorage.getItem("cart") != null ? (
        <>
          <InputsContainer>
            <h4>Pagamento</h4>
            <Card>
              <input
                type="text"
                name="card"
                id="card"
                placeholder="Nº: 0000.0000.0000.0000"
              />
              <input type="text" name="cvv" id="cvv" placeholder="CVV" />
            </Card>
            <Info>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="CPF: 000.000.000-00"
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome do títular (como está no cartão)"
              />
            </Info>
          </InputsContainer>
          <button onClick={concluir}>
            <span>Concluir</span>
          </button>
        </>
      ) : null}
    </Container>
  );
}
