import { useEffect } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import PostsList from "./features/PostsList/PostsList";
import SubredditsList from "./features/SubredditsList/SubredditsList";
import Overlay from "./features/Overlay/Overlay";
import { setIsMobile, selectIsMobile } from "./app/isMobileSlice";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "./utils/utils";
import {
  selectSidebarVisible,
  setSidebarVisible,
} from "./app/sidebarVisibleSlice";

function App() {
  const sidebarVisible = useSelector(selectSidebarVisible);
  const isMobile = useSelector(selectIsMobile);
  const dispatch = useDispatch();

  const handleWindowResize = throttle(() => {
    // setIsMobile expects a number - the window width,
    // it compares it to the hardcoded mobile treshold in
    // isMobileSlice.js
    dispatch(setIsMobile(window.innerWidth));
  }, 250);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // prevent body from scrolling when sidebar is visible
  useEffect(() => {
    if (sidebarVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [sidebarVisible]);

  // if the window is resized to desktop width, close the sideber
  useEffect(() => {
    if (isMobile === false) {
      dispatch(setSidebarVisible(false));
    }
  }, [isMobile]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <PostsList />
        {isMobile && <Overlay />}
      </main>
      <aside className={sidebarVisible && isMobile ? "sidebar-visible" : null}>
        <SubredditsList />
      </aside>
    </>
  );
}

export default App;
