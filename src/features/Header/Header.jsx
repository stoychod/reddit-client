import { BsReddit } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="reddit-logo">
        <BsReddit className="reddit-icon" />
        <p>Reddit</p>
      </div>
      <form className="search-form">
        <input type="text" placeholder="Search" value="" />
      </form>
      <div></div>
    </header>
  );
};

export default Header;
