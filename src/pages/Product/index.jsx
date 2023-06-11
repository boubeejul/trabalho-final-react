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

  const id  = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const {data: product} = await axios.get(`https://trabalho-api-production.up.railway.app/produtos/${id.id}`)
      setProduct(product)
      setIsLoading(true)
    }

    fetchData()
  }, [])
  
  return (
    <>
      <Container>
        {
          product.nome == null ? (
            <>
              {
                setTimeout(
                  () => {
                    return(
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
              <h2>R$ {product.valor_unitario}</h2>
              <h2>Estoque: {product.qtd_estoque}</h2>
              <h3>Escolha a quantidade</h3>
              <div className="quantity">
                <button className='minus'><RemoveIcon/></button>
                <input type="text" placeholder="0" id="qtd"/>
                <button className='plus'><AddIcon/></button>
              </div>
              <div className="finally">
                <button className = 'addCart'>Adicionar ao <ShoppingCartIcon fontSize="medium"/></button>
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
            <Slider category = {product.categoria.nome}/> 
            )
          }
        </SliderContainer>
      </Container>
    </>
  );
}
