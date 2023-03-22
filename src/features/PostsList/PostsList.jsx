import "./PostsList.css";
import Post from "../Post/Post";
import { useGetPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../app/searchTermSlice";
import { selectCurrntSubreddit } from "../../app/currentSubredditSlice";
import { getRandomInt } from "../../utils/utils";

const filterPosts = (posts, searchTerm) => {
  return posts.filter((post) => {
    return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const PostsList = () => {
  const currentSubreddit = useSelector(selectCurrntSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  const { data, isFetching, isSuccess, isError, error } =
    useGetPostsQuery(currentSubreddit);

  if (isFetching) {
    console.log("Loading posts");
    const loadingPosts = Array(getRandomInt(3, 7))
      .fill(0)
      .map((item, index) => {
        return <Post key={index} />;
      });
    return loadingPosts;
  } else if (isSuccess) {
    if (searchTerm !== "") {
      const filteredPosts = filterPosts(data, searchTerm);
      if (filteredPosts.length === 0) {
        return (
          <div className="error">
            <h2>
              No posts matching "<span>{searchTerm}</span>"
            </h2>
          </div>
        );
      }
      return filteredPosts;
    }

    const posts = data.map((post) => (
      <Post key={post.data.id} post={post.data} />
    ));

    return posts;
  } else if (isError) {
    content = <div className="error">{error.toString()}</div>;
  }
};

export default PostsList;
