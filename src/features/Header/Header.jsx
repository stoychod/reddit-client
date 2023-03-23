import { BsReddit } from "react-icons/bs";
import "./Header.css";
import MenuButton from "../Buttons/MenuButton";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../app/searchTermSlice";
import { selectIsMobile } from "../../app/isMobileSlice";
import { debounce } from "../../utils/utils";

const Header = () => {
  const isMobile = useSelector(selectIsMobile);
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
        />
      </form>
      <div className="menu-button">{isMobile && <MenuButton />}</div>
    </>
  );
};

export default Header;
