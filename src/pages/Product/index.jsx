import React from "react";
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
// import { useParams } from 'react-router-dom'

export function Product() {
  return (
    <>
      <Container>
        <ProductContainer>
          <ImageContainer>
            <img src="https://repositorio.sbrauble.com/arquivos/in/magic/238/5f4243882b972-7qj4bk-nvs5g0-19055be5ac0bf0e333b42e1965c78eff.jpg" alt="" />
          </ImageContainer>
          <InfoContainer>
            <h4>Nome da carta</h4>
            <h2>R$ 0000000,00</h2>
            <h2>Estoque: 0</h2>
            <div className="quantity">
              <button class='minus'><img src={Minus} alt="minus" /></button>
              <input type="text" placeholder="0"/>
              <button class='plus'><img src={Plus} alt="plus" /></button>
            </div>
            <div className="finally">
              <button class = 'addCart'><img src={ToCart} alt="toCart" /></button>
              <button class = 'buy'><img src={Money} alt='money' /></button>
            </div>
          </InfoContainer>
        </ProductContainer>
      </Container>
      <Footer></Footer>
    </>
  );
}
