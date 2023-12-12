import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/Navbar.jsx";

import { useState } from "react";
import "./App.css";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtles",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const choosePoke = (index) => {
    setPokemonIndex(index);
  };
  return (
    <>
      <div className="btn">
        {pokemonList.map(
          (pokemon, index) =>
            index !== pokemonIndex && (
              <NavBar
                key={pokemon.name}
                name={pokemon.name}
                choosePoke={() => choosePoke(index)}
              />
            )
        )}
      </div>
      <div className="background-primary radius-primary padding border-primary flex">
        {pokemonIndex !== null && (
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        )}
      </div>
    </>
  );
}

export default App;
