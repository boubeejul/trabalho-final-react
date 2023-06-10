import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../global/components/Header";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Product } from "../pages/Product";


export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}>
            <Route Component={Home} path="/"/>
            <Route Component={About} path="/about" />
            <Route Component={Contact} path="/contact" />
            <Route Component={Product} path={`/product/:id`}/>
        </Route>
            <Route Component={Login} path="/login" />
            <Route Component={Cadastro} path="/cadastro" />
      </Routes>
    </BrowserRouter>
  );
}
