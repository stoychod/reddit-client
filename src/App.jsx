import "./App.css";
import Header from "./features/Header/Header";
import { PostsList } from "./features/PostsList/PostsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <PostsList />
      </main>
      <aside></aside>
    </>
  );
}

export default App;
