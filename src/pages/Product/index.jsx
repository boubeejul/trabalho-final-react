import React, { useState, useEffect } from "react";
import {
  Container,
  ProductContainer,
  ImageContainer,
  InfoContainer,
  SliderContainer
  
} from "./style";
import { useParams } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider } from "./Component/Slider";
import { AlertMessage } from "../../global/components/AlertMessage/"
import { produtos } from "../services/api";

export function Product() {

  var id = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [verify, setVerify] = useState(false)
  var quantidade = 0;

  useEffect(() => {
    async function fetchData() {
      const { data: product } = await produtos.get(`/${id.id}`)
      setProduct(product)
      setIsLoading(true)
    }
    fetchData()
  }, [])

  function moreProduct() {

    var quantity = document.querySelector("#qtd")

    if (quantity.value < 9 && quantity.value < product.qtd_estoque)
      quantity.value++
  }

  function lessProduct() {

    var quantity = document.querySelector("#qtd")

    if (quantity.value > 1)
      quantity.value--
  }

  function verifyCart(updateCart) {
    var isPresent = false;

    for (var i = 0; i < updateCart.listaProdutos.length; i++) {
      if (updateCart.listaProdutos[i].produto.id_produto === id.id) {
        isPresent = true;
        break;
      }
    }
    return isPresent
  }

  function addToCart() {
    var currentCart = JSON.parse(sessionStorage.getItem("cart"))
    var itemQuantity = document.querySelector("#qtd").value

    var cart = {
      "listaProdutos": []
    }

    // se o carrinho já tiver algum produto
    if (currentCart != null) {
      var updateCart = currentCart

      // percorre a lista de produtos para ver se o atual já está presente
      var already = verifyCart(updateCart)

      // se o produto estiver lá, atualiza apenas a quantidade
      if (already) {
        for (var i = 0; i < updateCart.listaProdutos.length; i++) {
          if (updateCart.listaProdutos[i].produto.id_produto === id.id)
            updateCart.listaProdutos[i] = { produto: { id_produto: id.id, quantidade: itemQuantity, nome: product.nome, id_imagem: product.arquivo.id_imagem, valor: product.valor_unitario } }
          setVerify(true)
          sessionStorage.setItem("cart", JSON.stringify(updateCart))
        }

        // se não, acrescenta no carrinho
      } else {
        updateCart.listaProdutos.push({ produto: { id_produto: id.id, quantidade: itemQuantity, nome: product.nome, id_imagem: product.arquivo.id_imagem, valor: product.valor_unitario } })
        // document.querySelector("#itens").innerHTML = updateCart.listaProdutos.length
        sessionStorage.setItem("cart", JSON.stringify(updateCart))
        setVerify(true)
      }

      // atualiza sessionStorage

      // se o carrinho estiver vazio
    } else {
      cart.listaProdutos.push({ produto: { id_produto: id.id, quantidade: itemQuantity, nome: product.nome, id_imagem: product.arquivo.id_imagem, valor: product.valor_unitario } })
      sessionStorage.setItem("cart", JSON.stringify(cart))
      document.querySelector("#cartItens").removeAttribute("hidden")
      // document.querySelector("#itens").innerHTML = cart.listaProdutos.length
      setVerify(true)
    }

    if(sessionStorage.getItem('cart') != null) {
      let total = 0
      JSON.parse(sessionStorage.getItem('cart')).listaProdutos.forEach(prod => {
        total += parseInt(prod.produto.quantidade);
      })
      quantidade = total
    } else {
      quantidade = 0
    }
    document.querySelector("#itens").innerHTML = quantidade
  }

  return (
    <>
      <Container>
        {
          product.nome == null ? (
            <>
              {
                setTimeout(
                  () => {
                    return (
                      <img src="https://http.dog/static/codes/dogs/large/404.avif" alt="Not Found" />
                    )
                  }
                  , 200)
              }
            </>
          ) : (
            <>
              <ProductContainer>
                <ImageContainer>
                  <img src={`https://trabalho-api-production.up.railway.app/api/upload/view/${product.arquivo.id_imagem}`} alt="imagem produto" />
                </ImageContainer>
                <InfoContainer>
                  <h4>{product.nome}</h4>
                  <span><span>Preço (unidade) :</span> R$ {product.valor_unitario.toFixed(2)}</span>

                  {
                    product.qtd_estoque == 0 ? (
                      <AlertMessage type="error" message="Fora de estoque!" />
                    ) : (
                      <>
                        <span><span>Estoque: </span> {product.qtd_estoque}</span>
                        <span>Escolha a quantidade</span>
                        <div className="quantity">
                          <button className='minus' onClick={() => lessProduct()}><RemoveIcon /></button>
                          <input type="text" value="1" id="qtd" readOnly />
                          <button className='plus' onClick={() => moreProduct()}><AddIcon /></button>
                        </div>
                        <div className="finally">
                          <button className='addCart' onClick={() => document.querySelector("#qtd").value != 0 ? (addToCart()) : (null)}>Adicionar ao <ShoppingCartIcon fontSize="medium" /></button>
                        </div>
                        {
                          verify ? (
                            <>
                              <AlertMessage type="success" message="Produto adicionado ao carrinho" />
                            </>
                          ) : (
                            null
                          )
                        }
                        </>
                      )
                  }
                      </InfoContainer>
              </ProductContainer>
            </>
          )
        }
        
        <SliderContainer>
          <h4>Produtos da mesma categoria</h4>
          {
            isLoading && (
              <Slider category={product.categoria.nome} />
            )
          }
        </SliderContainer>
      </Container>
    </>
  );
}
