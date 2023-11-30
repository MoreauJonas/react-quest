import PropTypes from "prop-types";

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.number.isRequired,
  lenght: PropTypes.number.isRequired,
};

function NavBar({ pokemonIndex, setPokemonIndex, lenght }) {
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
      {pokemonIndex < lenght - 1 && (
        <button onClick={handleIncrement} className="incre">
          Suivant
        </button>
      )}
    </div>
  );
}

export default NavBar;
