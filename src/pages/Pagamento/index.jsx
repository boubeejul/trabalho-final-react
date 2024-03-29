import React, { useState, useEffect } from "react";
import { Container, InputsContainer, Card, Info } from "./style.js";
import axios from "axios";
import { AlertMessage } from "../../global/components/AlertMessage/"
import { clientes, api} from "../services/api.js";

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
  const [verify, setVerify] = useState(false);

  //Pegando as informações de cliente e fazendo a lista de produtos
  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      async function getCliente() {
        const cliente = await clientes.get(
          `/info/${user.email}`
        );
        setClient(cliente.data);
      }
      getCliente();
    }
  }, []);

  //Função para criar ItemPedido
  async function fazerItemPedido(item, id) {
    try {
      await api.post(
        `/itemPedidos`,
        {
          "quantidade": item.quantidade,
          "preco_venda": item.valor,
          "percentual_desconto": 0,
          "produto": {
            "id_produto": item.id_produto
          },
          "pedido": {
            "id_pedido": id
          }
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
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

    if(client.endereco != null) {
      var data = new Date;
      var dataString = `${data.getFullYear()}-${String(data.getMonth()+1).padStart(2,'0')}-${data.getDate()}`
      const criarPedido = {
          "data_pedido": dataString,
          "data_envio": dataString,
          "data_entrega": dataString,
          "status": RandomStatus(),
          "cliente": { 
              "id_cliente": client.id_cliente 
            }
        }
      try {
        const pedido = await api.post(
          `/pedidos`,
          criarPedido,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
            // ${user.accessToken}
          }
        );
        // setPurchase(pedido.data);


        for (const produto of cart.listaProdutos) {
            await fazerItemPedido(produto.produto, pedido.data.id_pedido);
        }
        
      } catch (error) {
        console.log(error);
      }
      sessionStorage.removeItem("cart")
      setVerify(true)
      //window.location.href = '/meuspedidos'
    } else {
      window.location.href = "/costumer"
    }
  }

  function RandomStatus() {
    let al = Math.floor(Math.random()*4)
    switch (al) {
      case 0:
        return 'Separação';
        break;
      case 1:
        return 'Enviado';
        break
      case 2:
        return 'Entregue'
        break;
      case 3:
        return 'Cancelado'
        break;
      default:
        return 'Que loucura!'
    }
  }

  return (
    <Container>
      {
            verify ? (
              <>
                <AlertMessage type="success" message="Pedido realizado com sucesso!"/>
                <a href="/meuspedidos">Meus Pedidos</a>
              </>
            ) : (
              null
            )
          }
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
          <button onClick={() => concluir()}>
            <span>Concluir</span>
          </button>
        </>
      ) : null}
    </Container>
  );
}
