import React from "react";
import "../stylesheets/App.css";
//import PokeList from "./PokeList"

const Pokemon = (props) => {
  const pokename = {props.list.name }

  // const renderPokemon = () => {
  //   return props.item.map((member, index) => {
  //     return <li key={index}>{member}</li>;

    };
  

  return (
    <div>
      <article>
        <Image src= alt= ></Image>
        <h4>name</h4>
        <ul>pokemostypes</ul>
      </article>
    </div>
  );
};

export default Pokemon;
