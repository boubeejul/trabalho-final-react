import { Outlet } from "react-router-dom";
import { Container, Logo, SearchBar, Costumer } from "./style";
import logo from "../../../assets/logo_header.png";
import searchicon from "../../../assets/searchicon.svg";
import cart from "../../../assets/cart.svg";
import login from "../../../assets/login.svg";
import { Menu } from "../Menu";

export function Header() {
  return (
    <>
      <Container>
        <Logo>
          <a href="/"><img src={logo} alt="" /></a>
        </Logo>
        <SearchBar>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Buscar..."
          ></input>
          <button>
            <img src={searchicon} alt=""></img>
          </button>
        </SearchBar>
        <Costumer>
          <img src={cart} alt=""></img>
          <a href="/login"><img src={login} alt=""></img></a>
        </Costumer>
      </Container>
      <Menu></Menu>
      <Outlet />
    </>
  );
}
