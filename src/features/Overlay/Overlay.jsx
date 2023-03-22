import { useSelector } from "react-redux";
import { selectSdiebarVisible } from "../../app/sidebarVisibleSlice";
import "./Overlay.css";

const Overlay = () => {
  const sidebarVisible = useSelector(selectSdiebarVisible);
  return (
    <div
      className={"overlay" + (sidebarVisible ? " overlay-active" : "")}
    ></div>
  );
};

export default Overlay;
