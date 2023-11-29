function PokemonCard({ pokemon }) {
  console.log(pokemon);

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
      <figcaption className="poke-name">{pokemon.name}</figcaption>
    </figure>
  );
}
import PropTypes from "prop-types";
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
  pokemon2: PropTypes.shape({
    name: PropTypes.string,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
