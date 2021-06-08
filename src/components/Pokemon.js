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
        <h4>{pokeItems.item.name}</h4>
        <ul>pokemontypes</ul>
      </article>
    </div>
  );
};

export default Pokemon;
