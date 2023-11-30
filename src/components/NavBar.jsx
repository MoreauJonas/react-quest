import PropTypes from "prop-types";

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  length: PropTypes.number,
};

function NavBar({ pokemonIndex, setPokemonIndex, length }) {
  const handleDecrement = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleIncrement = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div className="btn">
      {pokemonIndex > 0 && (
        <button onClick={handleDecrement} className="decre">
          Précedent
        </button>
      )}
      {pokemonIndex < length - 1 && (
        <button onClick={handleIncrement} className="incre">
          Suivant
        </button>
      )}
    </div>
  );
}

export default NavBar;
