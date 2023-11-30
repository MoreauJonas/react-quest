import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleDecrement = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleIncrement = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

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
      <div className="background-primary radius-primary padding border-primary flex">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div className="btn">
        {pokemonIndex > 0 && (
          <button onClick={handleDecrement} className="decre">
            Précedent
          </button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleIncrement} className="incre">
            Suivant
          </button>
        )}
      </div>
    </>
  );
}

export default App;
