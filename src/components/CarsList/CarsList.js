import React, { useState } from "react";

import carsData from "../../carsData";
import Button from "../Button/Button";



export default function CarsList() {

    const [cars, setCars] = useState([...carsData]);

    function deleteCar(id) {
        setCars(cars.filter((car) => car.id !== id));
    }

    function editCar(id) {
        const form = `
        <form className="form-editar" onSubmit={(e) => saveCar(e)}>
                    <div className="mb-4">
                        <label htmlFor="marca" className="form-label" >
                            Marca
                        </label>
                        <input type="text" className="form-control" id="marca" value={car.brand} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="modelo" className="form-label">
                            Modelo
                        </label>
                        <input type="text" className="form-control" id="modelo" value={car.model} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ano" className="form-label">
                            Ano
                        </label>
                        <input type="number" className="form-control" id="ano" value={car.year} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cor" className="form-label">
                            Cor
                        </label>
                        <input type="text" className="form-control" id="cor" value={car.color} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="preco" className="form-label">
                            Preço
                        </label>
                        <input type="number" className="form-control" id="preco" value={car.price} />
                    </div>

                    <Button type="submit" className="btn btn-warning">
                        Salvar
                    </Button>
                </form>
        
        `;
        setCars(cars.map((car) => {
            if (car.id === id) {
                document.querySelector("main").append = form;
           
        


            }
            return car;
        }));

    }


        








    return (
        <main className="container">
            <h1>Lista de Carros Hot Wheels</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Cor</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td>{car.price}</td>
                            <td>
                                <span className="btn btn-warning" onClick={() => editCar(car.id)}>Editar</span>
                                <span className="btn btn-danger" onClick={() => deleteCar(car.id)}>Excluir</span>
                            </td>
                        </tr>
                    ))}
                </tbody>

                



            </table>


        </main>
    );
}

