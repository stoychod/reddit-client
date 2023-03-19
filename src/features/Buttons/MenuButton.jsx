import { GrMenu, GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectSdiebarVisible } from "../../app/sidebarVisible";

const MenuButton = () => {
  const sidebarVisible = useSelector(selectSdiebarVisible);

  return (
    <button type="button" className="icon-action-button">
      {sidebarVisible ? (
        <GrClose className="icon-action-button" />
      ) : (
        <GrMenu className="icon-action" />
      )}
    </button>
  );
};

export default MenuButton;
