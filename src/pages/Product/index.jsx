import React, { useState, useEffect } from "react";
import {
  Container,
  ProductContainer,
  ImageContainer,
  InfoContainer
} from "./style";
import { Footer } from "../../global/components/Footer";
import Plus from '../../assets/Plus.svg'
import Minus from '../../assets/Minus.svg'
import Money from '../../assets/Money.svg'
import ToCart from '../../assets/ToCart.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export function Product() {

  const baseUrl = 'https://trabalho-api-production.up.railway.app'
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    async function fetchData() {
      const {data: product} = await axios.get(`/produtos/${id}`)
      setProduct(product)
    }
  }
  )
  
  return (
    <>
      <Container>
        {
          product.name == null ? (
            <img src="https://http.dog/static/codes/dogs/large/404.avif" alt="Not Found" />
          ) : (
            <>
            <ProductContainer>
            <ImageContainer>
              <img src={baseUrl + '/upload/view/' + product.id_imagem} alt="" />
            </ImageContainer>
            <InfoContainer>
              <h4>{product.nome}</h4>
              <h2>R$ {product.valor_unitario}</h2>
              <h2>Estoque: {product.qtd_estoque}</h2>
              <div className="quantity">
                <button class='minus'><img src={Minus} alt="minus" /></button>
                <input type="text" placeholder="0" id="qtd"/>
                <button class='plus'><img src={Plus} alt="plus" /></button>
              </div>
              <div className="finally">
                <button class = 'addCart'><img src={ToCart} alt="toCart" /></button>
                <button class = 'buy'><img src={Money} alt='money' /></button>
              </div>
            </InfoContainer>
        </ProductContainer>
            </>
          )
        }
      </Container>
      <Footer></Footer>
    </>
  );
}
