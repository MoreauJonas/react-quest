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

function PokemonCard() {
  const pokemon = pokemonList[0];

  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className="background-secondary radius-primary border-secondary"
        />
      ) : (
        <p>????</p>
      )}
      <figcaption className="poke-name">
        {pokemon.name === "bulbasaur" ? pokemon.name : pokemonList[1].name}
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
