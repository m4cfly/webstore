import PropTypes from "prop-types";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">Contact</li>
          <li className="menu-item">Cart ({cartCount})</li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
