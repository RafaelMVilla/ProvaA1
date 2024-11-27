import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css'
import TarefaCadastro from "./components/pages/TarefaCadastro";
import TarefaListar from "./components/pages/TarefaListar";



function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/pages/produto/listar">
                {" "}
                Listar Tarefas{" "}
              </Link>
            </li>
            <li>
              <Link to="/pages/produto/cadastrar">
                {" "}
                Cadastrar Tarefas{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div id="conteudo">
          <Routes>
            <Route path="/" element={<TarefaListar />} />
            <Route
              path="/pages/produto/listar"
              element={<TarefaCadastro />}
            />
            <Route
              path="/pages/produto/cadastrar"
              element={<TarefaCadastro />}
              />
          </Routes>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
