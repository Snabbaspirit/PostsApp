import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <h1>Sync posts</h1>
          <Posts />
        </div>
        <div className="col">
        <h1>Async posts</h1>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
