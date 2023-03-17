import { BsReddit } from "react-icons/bs";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../../app/searchTermSlice";

const Header = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  return (
    <>
      <div className="reddit-logo">
        <BsReddit className="reddit-icon" />
        <p>Reddit</p>
      </div>
      <form className="search-form">
        <input
          onChange={({ target }) => dispatch(setSearchTerm(target.value))}
          type="text"
          placeholder="Search posts"
          value={searchTerm}
        />
      </form>
      <div></div>
    </>
  );
};

export default Header;
