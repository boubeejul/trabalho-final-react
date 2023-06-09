import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../global/components/Header";
import { Home } from "../pages/Home/Home";
import { Footer } from "../global/components/Footer";
import { About } from "../pages/About/About";
import { Component } from "react";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}>
            <Route Component={Home} path="/"/>
            <Route Component={About} path="/about" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
