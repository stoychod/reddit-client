import "./PostsList.css";
import Post from "../Post/Post";
import { useGetPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../app/searchTermSlice";
import { selectCurrntSubreddit } from "../../app/currentSubredditSlice";
import { getRandomInt } from "../../utils/utils";

const PostsList = () => {
  const currentSubreddit = useSelector(selectCurrntSubreddit);

  let {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery(currentSubreddit);

  const searchTerm = useSelector(selectSearchTerm);

  const filterPosts = (posts, searchTerm) => {
    return posts.filter((post) => {
      return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  let content;

  if (isLoading) {
    const loadingPosts = Array(getRandomInt(3, 7))
      .fill(0)
      .map((item, index) => {
        return <Post key={index} />;
      });
    return loadingPosts;
  } else if (isSuccess) {
    if (searchTerm !== "") {
      posts = filterPosts(posts, searchTerm);
      if (posts.length === 0) {
        return (
          <div className="error">
            <h2>No posts matching "<span>{searchTerm}</span>"</h2>
          </div>
        );
      }
    }
    content = posts.map((post) => <Post key={post.data.id} post={post.data} />);
  } else if (isError) {
    content = <div className="error">{error.toString()}</div>;
  }

  return content;
};

export default PostsList;
