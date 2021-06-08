import React from "react";
import "../stylesheets/App.css";
//import PokeList from "./PokeList"

const Pokemon = (pokeItems) => {
  console.log(pokeItems);

  // const renderPokemon = () => {
  //   return props.item.map((member, index) => {
  //     return <li key={index}>{member}</li>;

  return (
    <div>
      <article>
        <img
          src={pokeItems.item.url}
          alt={"Imagen de" + pokeItems.item.name}></img>
        <h3>{pokeItems.item.name}</h3>
        <h4>{pokeItems.item.types}</h4>
      </article>
    </div>
  );
};

export default Pokemon;
