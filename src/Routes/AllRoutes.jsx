import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../global/components/Header";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Product } from "../pages/Product";
import { ProductsByCategory } from "../pages/ProductsByCategory/ProductsByCategory";
import { Footer } from "../global/components/Footer";
import { Costumer } from "../pages/Costumer/Costumer";
import { Carrinho } from "../pages/Carrinho";
import { Pagamento } from "../pages/Pagamento";
import { MeusPedidos } from "../pages/MeusPedidos";
import { Pedido } from "../pages/Pedido";
import { NotFound } from "../pages/NotFound";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Footer}>
          <Route Component={Header}>
            <Route Component={Home} path="/" />
            <Route Component={About} path="/about" />
            <Route Component={Contact} path="/contact" />
            <Route Component={Product} path={`/produtos/:id`} />
            <Route Component={ProductsByCategory} path={`/categoria/:id`} />
            <Route Component={Costumer} path={"/costumer"} />
            <Route Component={Carrinho} path={"/cart"} />
            <Route Component={Pagamento} path={'/pagamento'} />
            <Route Component={MeusPedidos} path={'/meuspedidos'} />
            <Route Component={Pedido} path={'/meuspedidos/:id'} />
            <Route Component={NotFound} path={'/*'}/>
          </Route>
          <Route Component={Login} path="/login" />
          <Route Component={Cadastro} path="/cadastro" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
