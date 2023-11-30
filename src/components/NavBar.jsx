import PropTypes from "prop-types";

function NavBar({ name, choosePoke }) {
  return (
    <button onClick={choosePoke} className="decre">
      {name}
    </button>
  );
}
NavBar.propTypes = {
  name: PropTypes.string.isRequired,
  choosePoke: PropTypes.func,
};
export default NavBar;
