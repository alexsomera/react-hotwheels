
import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./App.css";
import Home from "./components/Home/Home";
import CarForm from "./components/CarForm/CarForm";
import CarsList from "./components/CarsList/CarsList";
import CarDetail from "./components/CarDetail/CarDetail";
import About from "./components/About/About";




function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <CarForm /> */}
      {/* <CarsList /> */}
      {/* <CarDetail /> */}
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;