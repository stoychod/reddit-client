import { BsReddit } from "react-icons/bs";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../../app/searchTermSlice";
import { debounce } from "../../utils/utils";

const Header = () => {
  // const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleOnChange = debounce((value) => {
    dispatch(setSearchTerm(value));
  });

  return (
    <>
      <div className="reddit-logo">
        <BsReddit className="reddit-icon" />
        <p>Reddit</p>
      </div>
      <form className="search-form">
        <input
          onChange={({ target }) => handleOnChange(target.value)}
          type="text"
          placeholder="Search posts"
          // value={searchTerm}
        />
      </form>
      <div></div>
    </>
  );
};

export default Header;
