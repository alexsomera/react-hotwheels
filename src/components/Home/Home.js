import React from "react";
import Anchor from "../Anchor/Anchor";

const Home = () => {
  return (
    <main className="container">
      <h1>Hot Wheels</h1>
      <p>Bem-vindo ao CRUD Hot Wheels</p>
      <br />
      <Anchor to="/cars" className="btn btn-primary">
        Ver carros
      </Anchor>
      <Anchor to="/add" className="btn btn-success">
        Adicionar carro
      </Anchor>
      <Anchor to="/about" className="btn btn-info">
        Sobre
      </Anchor>
    </main>
  );
};

export default Home;