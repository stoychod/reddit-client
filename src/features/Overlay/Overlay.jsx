import { useSelector } from "react-redux";
import { selectSidebarVisible } from "../../app/sidebarVisibleSlice";
import "./Overlay.css";

const Overlay = () => {
  const sidebarVisible = useSelector(selectSidebarVisible);
  return (
    <div
      className={"overlay" + (sidebarVisible ? " overlay-active" : "")}
    ></div>
  );
};

export default Overlay;
