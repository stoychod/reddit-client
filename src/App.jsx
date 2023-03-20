import { useEffect } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import PostsList from "./features/PostsList/PostsList";
import SubredditsList from "./features/SubredditsList/SubredditsList";
import Overlay from "./features/Overlay/Overlay";
import { setIsMobile, selectIsMobile } from "./app/isMobileSlice";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "./utils/utils";
import { selectSdiebarVisible, setSidedbarVisible } from "./app/sidebarVisible";

function App() {
  const sidebarVisible = useSelector(selectSdiebarVisible);
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

  // if the window is resized to desktop width, close the sideber
  useEffect(() => {
    if (isMobile === false) {
      dispatch(setSidedbarVisible(false));
    }
  }, [isMobile]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <PostsList />
        {isMobile && sidebarVisible ? <Overlay /> : null}
      </main>
      <aside className={sidebarVisible && isMobile ? "sidebar-visible" : null}>
        <SubredditsList />
      </aside>
    </>
  );
}

export default App;
