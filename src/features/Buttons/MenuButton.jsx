import { GrMenu, GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSdiebarVisible,
  setSidedbarVisible,
} from "../../app/sidebarVisibleSlice";

const MenuButton = () => {
  const sidebarVisible = useSelector(selectSdiebarVisible);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(setSidedbarVisible(!sidebarVisible));

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
