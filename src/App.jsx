import "./App.css";
import Header from "./features/Header/Header";
import PostsList from "./features/PostsList/PostsList";
import SubredditsList from "./features/SubredditsList/SubredditsList";

function App() {
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
