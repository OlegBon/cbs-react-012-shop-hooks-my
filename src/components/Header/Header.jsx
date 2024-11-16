import logo from "../../assets/logo.avif";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="" />
      <nav>
        <h1>Shop</h1>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>
    </header>
  );
};

export default Header;
