import { useEffect } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import PostsList from "./features/PostsList/PostsList";
import SubredditsList from "./features/SubredditsList/SubredditsList";
import Overlay from "./features/Overlay/Overlay";
import { setIsMobile, selectIsMobile } from "./app/isMobileSlice";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "./utils/utils";
import { selectSdiebarVisible } from "./app/sidebarVisible";

function App() {
  const sidebarVisible = useSelector(selectSdiebarVisible);
  const isMobile = useSelector(selectIsMobile);
  const dispatch = useDispatch();

  const handleWindowResize = throttle(() => {
    dispatch(setIsMobile(window.innerWidth));
  }, 250);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
