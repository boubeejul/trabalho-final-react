import { useParams } from "react-router-dom";
import * as React from 'react';
import { Footer } from "../../global/components/Footer";
import { useState, useEffect } from "react";
import { Container, Product, Wrap, Info, ContainerTop } from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menu from '../../assets/down.png'

export function ProductsByCategory() {
  const category = useParams();
  const [catProducts, setCatProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const sortProducts = (option) => {
    setSortBy(option);
    let sorted = [];

    if (option === "alphabetical") {
      sorted = catProducts.produtos.slice().sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
    } else if (option === "unit_price") {
      sorted = catProducts.produtos.slice().sort((a, b) => {
        return a.valor_unitario - b.valor_unitario;
      });
    } else if (option === "alphabetical2") {
      sorted = catProducts.produtos.slice().sort((a, b) => {
        return b.nome.localeCompare(a.nome);
      });
    } else if (option === "unit_price2") {
      sorted = catProducts.produtos.slice().sort((a, b) => {
        return b.valor_unitario - a.valor_unitario;
      });
    }

    setSortedProducts(sorted);
  };

  return (
    <>
      <Container>
        <ContainerTop>

          <h5>Categoria &gt; {catProducts.nome}</h5>
          <div>

            <>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <img src={menu} alt="" /> <span>&ensp;&ensp;Ordenar</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => { sortProducts("alphabetical"); handleClose(); }}>
                  <h7>A-z</h7>
                </MenuItem>
                <MenuItem onClick={() => { sortProducts("alphabetical2"); handleClose(); }}>
                  <h7>Z-a</h7>
                </MenuItem>
                <MenuItem onClick={() => { sortProducts("unit_price"); handleClose(); }}>
                  <h7>Valor ↑</h7>
                </MenuItem>
                <MenuItem onClick={() => { sortProducts("unit_price2"); handleClose(); }}>
                  <h7>Valor ↓</h7>
                </MenuItem>

              </Menu>

            </>
          </div>
        </ContainerTop>
        <Wrap>
          {isLoading
            ? null
            : (sortBy ? sortedProducts : catProducts.produtos).map((product) => (
              <Link to={`/produtos/${product.id_produto}`} key={product.id_produto}>
                <Product>
                  <img
                    src={`https://trabalho-api-production.up.railway.app/upload/view/${product.arquivo.id_imagem}`}
                    alt=""
                  />
                  <Info>
                    <span>{product.nome}</span>
                    <span>R${product.valor_unitario}</span>
                  </Info>
                </Product>
              </Link>
            ))}
        </Wrap>
      </Container>
    </>
  );
}
