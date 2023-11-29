import PokemonCard from "./components/PokemonCard.jsx";

import "./App.css";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  // change target for switch pokemon
  const target = "bulbasaur";
  let pokemonTarget =
    target === pokemonList[0].name ? pokemonList[0] : pokemonList[1];

  return (
    <div className="background-primary radius-primary padding border-primary">
      <PokemonCard pokemon={pokemonTarget} />
    </div>
  );
}

export default App;
