import React from "react";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container justify-content-between">
      <img src={process.env.PUBLIC_URL + 'logo.svg'} className="" alt="logo" height={120} width={120} />
      
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

          </ul>
            <a href="" className="btn btn-success m-3">
                Adicionar Carro
                </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;