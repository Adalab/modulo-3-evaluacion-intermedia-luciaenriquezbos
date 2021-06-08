import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.css";

const PokeList = (props) => {
  const pokeItems = props.list.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul>{pokeItems}</ul>;
};

export default PokeList;
