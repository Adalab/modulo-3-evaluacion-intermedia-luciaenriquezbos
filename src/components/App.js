import React from "react";
import "../stylesheets/App.css";
import data from "../data/pokemons.json";
import PokeList from "./PokeList";

const App = () => {
  return (
    <>
      <h1>Mis Listado de Pokemons</h1>
      <PokeList list={data} />
    </>
  );
};

export default App;
