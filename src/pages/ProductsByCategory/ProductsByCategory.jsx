import { useParams } from "react-router-dom";
import { Footer } from "../../global/components/Footer";
import { useState, useEffect } from "react";
import { Container, Product, Wrap, Info } from "./style";
import axios from "axios";

export function ProductsByCategory() {
  const category = useParams();
  const [catProducts, setCatProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: products } = await axios.get(
        `https://trabalho-api-production.up.railway.app/categorias/${category.id}`
      );
      setCatProducts(products);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <h5>Categoria &gt; {catProducts.nome}</h5>
        <Wrap>
          {isLoading
            ? null
            : catProducts.produtos.map((product) => {
                return (
                  <Product>
                    <a href={`/produtos/${product.id_produto}`}>
                      <img
                        src={`https://trabalho-api-production.up.railway.app/upload/view/${product.arquivo.id_imagem}`}
                        alt=""
                      />
                      <Info>
                        <span>{product.nome}</span>
                        <span>R${product.valor_unitario}</span>
                      </Info>
                    </a>
                  </Product>
                );
              })}
        </Wrap>
      </Container>
    </>
  );
}
