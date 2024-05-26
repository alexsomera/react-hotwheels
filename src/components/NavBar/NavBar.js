import React from "react";


const NavBar = () => {
  return (

      <nav className="navbar navbar-dark navbar-expand-md">
        <img src={process.env.PUBLIC_URL + 'logo.png'} className="" alt="logo" width={180} height={68} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-white">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Carros
              </a>
            </li>
            <li className="nav-item">
            <a href="adicionar" className="btn btn-warning">
            Adicionar Carro
          </a>
              </li>
          </ul>
          
        </div>
      </nav>

  );
};

export default NavBar;