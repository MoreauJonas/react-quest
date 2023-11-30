import PropTypes from "prop-types";
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

function PokemonCard({ pokemon }) {
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

export default PokemonCard;
