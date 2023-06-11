import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Logo, SearchBar, Costumer, Itens } from "./style";
import logo from "../../../assets/logo_header.png";
import searchicon from "../../../assets/searchicon.svg";
import cart from "../../../assets/cart.svg";
import login from "../../../assets/login.svg";
import { Menu } from "../Menu";
import { Categories } from "../Categories";
import axios, { all } from "axios";

export function Header() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: products } = await axios.get(
        "https://trabalho-api-production.up.railway.app/produtos/dto"
      );
      setAllData(products);
    }
    fetchData();
  }, []);

  const handleFilter = (event) => {
    var word = event.target.value
    var filteredProducts = allData.filter(
      product => {
        return product.nome.toLowerCase().includes(word.toLowerCase())
      }
    )
    var sorted = filteredProducts.slice().sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });
    if (word == '') {
      setFilteredData([])
    } else {
      setFilteredData(sorted)
    }
  };

  function getFirst() {
    if (filteredData != null) {
      window.location.href = `/produtos/${filteredData[0].id}`
    }
  }

  return (
    <>
      <Container>
        <Logo>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </Logo>
        <SearchBar>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Buscar..."
            onChange={handleFilter}
          ></input>
          <button onClick={getFirst}>
            <img src={searchicon} alt=""></img>
          </button>
        </SearchBar>
        <Costumer>
          <img src={cart} alt=""></img>

          {sessionStorage.getItem("user") == null ? (
            <a href="/login">
              <img src={login} alt=""></img>
            </a>
          ) : (
            <Categories type=""></Categories>
          )}
        </Costumer>
      </Container>
      <Menu></Menu>
      {filteredData.length != 0 && (
        <Itens>
          {filteredData.map((item) => {
            return (
            <div>
              <a href={`/produtos/${item.id}`}>{item.nome}</a>
            </div>
            )
          })}
        </Itens>
      )}
      <Outlet />
    </>
  );
}
