import React, { useState } from "react";

import carsData from "../../carsData";
import Button from "../Button/Button";



export default function CarsList() {

    const [cars, setCars] = useState(carsData);


    console.log('entrou na lista de carros');

    const deleteCar = (e,id) => {
        e.preventDefault();

        console.log(id);
    }

    const editCar = (e,id) => {
        e.preventDefault();
        console.log(id);
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
                    <Button type="button" className="btn btn-warning"
                    onClick={(e) => editCar(car.id)}
                    >
                        Editar
                        </Button>
                    <Button type="button" className="btn btn-danger"
                    onClick={(e) => deleteCar(car.id)}>Excluir</Button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        
        </main>
    );
}

