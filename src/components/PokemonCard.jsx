function PokemonCard() {
  return (
    <figure>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
        className="background-secondary radius-primary border-secondary"
      />
      <figcaption className="poke-name">bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;
