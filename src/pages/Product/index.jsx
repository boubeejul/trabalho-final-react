import React, { useState, useEffect } from "react";
import {
  Container,
  ProductContainer,
  ImageContainer,
  InfoContainer,
  SliderContainer,
  CommentsContainer,
  TabelasComments,
  Porcentual,
  Nota,
  TableImg,
  TableUsers,
  CardUser,
  TitleComent
} from "./style";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider } from "./Component/Slider";
import star from '../../assets/4-5star.png'
import tabela from '../../assets/tabela.png'
import ellipse2Enzo from '../../assets/Ellipse2Enzo.png'
import ellipse2joao from '../../assets/Ellipse2joao.png'
import ellipse2juliana from '../../assets/Ellipse2juliana.png'
import ellipse2Romulo from '../../assets/Ellipse2Romulo.png'
import ellipse2Maria from '../../assets/Ellipse2Maria.png'
import { AlertMessage } from "../../global/components/AlertMessage/"

export function Product() {

  var id = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [verify, setVerify] = useState(false)

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
          break
        }

        // se não, acrescenta no carrinho
      } else {
        updateCart.listaProdutos.push({ produto: { id_produto: id.id, quantidade: itemQuantity, nome: product.nome, id_imagem: product.arquivo.id_imagem, valor: product.valor_unitario } })
        document.querySelector("#itens").innerHTML = updateCart.listaProdutos.length
        setVerify(true)
      }

      // atualiza sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(updateCart))

      // se o carrinho estiver vazio
    } else {
      cart.listaProdutos.push({ produto: { id_produto: id.id, quantidade: itemQuantity, nome: product.nome, id_imagem: product.arquivo.id_imagem, valor: product.valor_unitario } })
      sessionStorage.setItem("cart", JSON.stringify(cart))
      document.querySelector("#cartItens").removeAttribute("hidden")
      document.querySelector("#itens").innerHTML = cart.listaProdutos.length
      setVerify(true)
    }

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
        <TitleComent>
          <h4>Comentários</h4>
        </TitleComent>
        <CommentsContainer>
          <TabelasComments>
            <h3>Opniões do Produto</h3>
            <Porcentual>
              <Nota>
                <h2>4.5</h2>
                <img src={star} alt="estrelas" />
              </Nota>
              <p>50 avaliações</p>
            </Porcentual>
            <TableImg>
              <img src={tabela} alt="tabela" />
            </TableImg>
            <h1>Avaliação de características</h1>
            <p>Custo-Beneficio</p>
            <img src={star} alt="estrelas" />
            <p>Qualidade do Produto</p>
            <img src={star} alt="estrelas" />
            <p>Entrega</p>
            <img src={star} alt="estrelas" />
            <p>Atendimento</p>
            <img src={star} alt="estrelas" />
            <p>Embalagem</p>
            <img src={star} alt="estrelas" />
          </TabelasComments>
          <TableUsers>
            <CardUser>
              <img src={ellipse2juliana} alt="fotoPerfilUsuario" />
              <div>
                <h1>Juliana Amaral</h1>
                <p>Meu deck vai ficar otimo com a {product.nome}</p>
              </div>
            </CardUser>
            <CardUser>
              <img src={ellipse2Romulo} alt="fotoPerfilUsuario" />
              <div>
                <h1>Rômulo José</h1>
                <p>Perfeito estado, comprarei mais!!</p>
              </div>
            </CardUser>
            <CardUser>
              <img src={ellipse2Maria} alt="fotoPerfilUsuario" />
              <div>
                <h1>Maria Silva</h1>
                <p>Entrega rápida, bem rápida!111!</p>
              </div>
            </CardUser>
            <CardUser>
              <img src={ellipse2joao} alt="fotoPerfilUsuario" />
              <div>
                <h1>João Pedro Souza</h1>
                <p>Amassei com essa {product.nome}</p>
              </div>

            </CardUser>
            <CardUser>
              <img src={ellipse2Enzo} alt="fotoPerfilUsuario" />
              <div>
                <h1>Enzo Andrade</h1>
                <p>Obrigado mãe por essa {product.nome}</p>
              </div>
            </CardUser>
          </TableUsers>
        </CommentsContainer>
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
