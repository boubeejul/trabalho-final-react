import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Logo, SearchBar, Costumer, Itens, Cart } from "./style";
import logo from "../../../assets/logo_header.png";
import searchicon from "../../../assets/searchicon.svg";
import cart from "../../../assets/cart.svg";
import login from "../../../assets/login.svg";
import { Menu } from "../Menu";
import { Categories } from "../Categories";
import { produtos } from "../../../pages/services/api";
import { Link } from "react-router-dom";

export function Header() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [quantidade, setQuantidade] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const { data: products } = await produtos.get(
        "/dto"
      );
      setAllData(products);
    }
    fetchData();
  }, []);

  useEffect(()=> {
    if(sessionStorage.getItem('cart') != null) {
      let total = 0
      JSON.parse(sessionStorage.getItem('cart')).listaProdutos.forEach(prod => {
        total += parseInt(prod.produto.quantidade);
      })
      setQuantidade(total)
    } else {
      setQuantidade(0)
    }
  },[sessionStorage.getItem('cart')])

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
            <img src={logo} alt="logo" />
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
            <img src={searchicon} alt="ícone botão pesquisa"></img>
          </button>
          {
            filteredData.length != 0 && (
              <Itens>
                {filteredData.map((item) => {
                  return (
                    <div>
                      <a href={`/produtos/${item.id}`}>{item.nome}</a>
                    </div>
                  )
                })}
              </Itens>
            )
          }
        </SearchBar>
        <Costumer>

          <Cart>
            <Link to="/cart"><img src={cart} alt="ícone carrinho de compras"></img></Link>
            {sessionStorage.getItem("cart") != null ? (
              <div id="cartItens">
                <span id="itens">{quantidade}</span>
              </div>
            ) : (
              <div id="cartItens" hidden>
                <span id="itens"></span>
              </div>
            )}
          </Cart>


          {sessionStorage.getItem("user") == null ? (
            <a href="/login">
              <img src={login} alt="ícone login"></img>
            </a>
          ) : (
            <Categories type=""></Categories>
          )}

        </Costumer>
      </Container >
      <Menu></Menu>
      <Outlet />
    </>
  );
}
