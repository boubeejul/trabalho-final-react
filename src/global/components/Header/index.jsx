import { Outlet, Link } from "react-router-dom"
import { Container, Logo, SearchBar, Costumer } from "./style"
import logo from "../../../assets/logo_header.png"
import searchicon from "../../../assets/searchicon.svg"
import cart from "../../../assets/cart.svg"
import login from "../../../assets/login.svg"

export function Header() {
    return (

        <Container>
            <Logo>
                <img src={logo} alt=""/>
            </Logo>
            <SearchBar>
                <input type="text" id="search" name="search" placeholder="Buscar..."></input>
                <button><img src={searchicon} alt =""></img></button>
            </SearchBar>
            <Costumer>
                <img src={cart} alt =""></img>
                <img src={login} alt =""></img>
            </Costumer>
            <Outlet />
        </Container>
    )
}