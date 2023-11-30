import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/Navbar.jsx";

import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

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
      name: "squirtle",
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

  return (
    <>
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        length={pokemonList.length}
      />
      <div className="background-primary radius-primary padding border-primary flex">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;
