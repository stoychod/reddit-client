import { GrMenu, GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSidebarVisible,
  setSidebarVisible,
} from "../../app/sidebarVisibleSlice";

const MenuButton = () => {
  const sidebarVisible = useSelector(selectSidebarVisible);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(setSidebarVisible(!sidebarVisible));

  return (
    <button
      type="button"
      className="icon-action-button"
      onClick={handleOnClick}
    >
      {sidebarVisible ? (
        <GrClose className="icon-action" />
      ) : (
        <GrMenu className="icon-action" />
      )}
    </button>
  );
};

export default MenuButton;
