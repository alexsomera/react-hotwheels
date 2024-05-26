import React from "react";
import Button from "../Button/Button";
import * as bootstrap from "bootstrap";

const CarForm = () => {

    const setAlert = (message) => {
        const modal = new bootstrap.Modal(document.getElementById("modal"));
        document.querySelector(".modal-title").textContent = message;
        modal.show();
    }

    const saveCar = (e) => {
        e.preventDefault();
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const ano = document.getElementById("ano").value;
        const cor = document.getElementById("cor").value;
        const preco = document.getElementById("preco").value;

        if (!marca || !modelo || !ano || !cor || !preco) {

            setAlert("Preencha todos os campos!");
            return;
        }

        if (ano < 1900 || ano > 2022) {
            setAlert("Ano inválido!");
            return;
        }

        if (preco < 0) {
            setAlert("Preço inválido!");
            return;
        }

        const newCar = {
            marca,
            modelo,
            ano,
            cor,
            preco
        };

        console.log(newCar);

        const cars = JSON.parse(localStorage.getItem("cars")) || [];
        cars.push(newCar);
        localStorage.setItem("cars", JSON.stringify(cars));
        setAlert("Carro adicionado com sucesso!");

        e.target.reset();

    }




    return (
        <main className="container">
            <h1>Adicionar Carro</h1>
            <form  onSubmit={(e) => saveCar(e)}>
                <div className="mb-4">
                    <label htmlFor="marca" className="form-label">
                        Marca
                    </label>
                    <input type="text" className="form-control" id="marca" />
                </div>
                <div className="mb-4">
                    <label htmlFor="modelo" className="form-label">
                        Modelo
                    </label>
                    <input type="text" className="form-control" id="modelo" />
                </div>
                <div className="mb-4">
                    <label htmlFor="ano" className="form-label">
                        Ano
                    </label>
                    <input type="number" className="form-control" id="ano" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cor" className="form-label">
                        Cor
                    </label>
                    <input type="text" className="form-control" id="cor" />
                </div>
                <div className="mb-4">
                    <label htmlFor="preco" className="form-label">
                        Preço
                    </label>
                    <input type="number" className="form-control" id="preco" />
                </div>

                <Button type="submit" className="btn btn-warning">
                    Adicionar
                </Button>

            </form>

            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
};

export default CarForm;