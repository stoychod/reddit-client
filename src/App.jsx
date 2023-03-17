import { useEffect } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import PostsList from "./features/PostsList/PostsList";
import SubredditsList from "./features/SubredditsList/SubredditsList";
import { setIsMobile } from "./app/isMobileSlice";
import { useDispatch } from "react-redux";
import { throttle } from "./utils/utils";

function App() {
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
      </main>
      <aside>
        <SubredditsList />
      </aside>
    </>
  );
}

export default App;
