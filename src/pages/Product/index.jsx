import React, { useState, useEffect } from "react";
import {
  Container,
  ProductContainer,
  ImageContainer,
  InfoContainer,
  SliderContainer
} from "./style";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider } from "./Component/Slider";

export function Product() {

  var id = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState()

  useEffect(() => {
    async function fetchData() {
      const { data: product } = await axios.get(`https://trabalho-api-production.up.railway.app/produtos/${id.id}`)
      setProduct(product)
      setIsLoading(true)
    }
      fetchData()
    }, [])

  function moreProduct() {

    var quantity = document.querySelector("#qtd")

    if (quantity.value < 9)
      quantity.value++
  }

  function lessProduct() {

    var quantity = document.querySelector("#qtd")

    if (quantity.value > 0)
      quantity.value--
  }

  function verifyCart(updateCart) {
    var isPresent =  false;

    for (var i = 0; i < updateCart.listaProdutos.length; i ++) {
      if(updateCart.listaProdutos[i].produto.id_produto === id.id) {
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
              updateCart.listaProdutos[i] = {produto: { id_produto: id.id, quantidade: itemQuantity }}
        }

      // se não, acrescenta no carrinho
      } else {
        updateCart.listaProdutos.push({produto: {id_produto: id.id, quantidade: itemQuantity}})
      }

      // atualiza sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(updateCart))

    // se o carrinho estiver vazio
    } else {
      cart.listaProdutos.push({ produto: { id_produto: id.id, quantidade: itemQuantity } })
      sessionStorage.setItem("cart", JSON.stringify(cart))
    }

    document.querySelector("#itens").innerHTML = updateCart.listaProdutos.length
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
                  <img src={`https://trabalho-api-production.up.railway.app/upload/view/${product.arquivo.id_imagem}`} alt="" />
                </ImageContainer>
                <InfoContainer>
                  <h4>{product.nome}</h4>
                  <span><span>Preço (unidade) :</span> R$ {product.valor_unitario.toFixed(2)}</span>
                  <span><span>Estoque: </span> {product.qtd_estoque}</span>
                  <span>Escolha a quantidade</span>
                  <div className="quantity">
                    <button className='minus' onClick={() => lessProduct()}><RemoveIcon /></button>
                    <input type="text" placeholder="0" id="qtd" />
                    <button className='plus' onClick={() => moreProduct()}><AddIcon /></button>
                  </div>
                  <div className="finally">
                    <button className='addCart' onClick={() => document.querySelector("#qtd").value !=0 ? (addToCart()) : (null)}>Adicionar ao <ShoppingCartIcon fontSize="medium" /></button>
                  </div>
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
