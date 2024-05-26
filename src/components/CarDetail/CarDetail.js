import React from "react";
import { useState } from "react";
import Button from "../Button/Button";

const prevState = {
  brand: "1",
  model: "3",
  year: "3",
  color: "4",
  price: "5",
};



const CarDetail = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const [car, setCar] = useState({
    brand: "1",
    model: "3",
    year: "3",
    color: "4",
    price: "5",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let car = [];
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].value === "") {
        alert("Preencha todos os campos");
        return;
      }
      car.push(event.target[i].name + ":" + event.target[i].value);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setCar((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    
    console.log(car);
    setCar({car});
  };
  return (
    <main className="container">
      <h1>Detalhes do Carro</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="brand" className="form-label">
            Marca
          </label>
          <input type="text" className="form-control" value={ car.brand } onChange={ handleChange  } id="brand" />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="form-label">
            Modelo
          </label>
          <input type="text" className="form-control" value={ car.model } onChange={ handleChange  } id="model" />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="form-label">
            Ano
          </label>
          <input type="text" className="form-control" value={ car.year } onChange={ handleChange  } id="year" />
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="form-label">
            Cor
          </label>
          <input type="text" className="form-control" value={car.color} onChange={ handleChange  } id="color" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="form-label">
            Preço
          </label>
          <input type="text" className="form-control" value={car.price} onChange={ handleChange  } id="price" />
        </div>

        <Button type="submit" className="btn btn-warning">
          Salvar 
        </Button>
      </form>
    </main>
  );
};

export default CarDetail;