import "./PostsList.css";
import Post from "../Post/Post";
import { useGetPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../app/searchTermSlice";
import { selectCurrentSubreddit } from "../../app/currentSubredditSlice";
import { getRandomInt } from "../../utils/utils";

const filterPosts = (posts, searchTerm) => {
  return posts.filter((post) => {
    return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const PostsList = () => {
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  const { data, isFetching, isSuccess, isError, error } =
    useGetPostsQuery(currentSubreddit);

  let postsData;

  if (isFetching) {
    const loadingPosts = Array(getRandomInt(3, 7))
      .fill(0)
      .map((item, index) => {
        return <Post key={index} />;
      });
    return loadingPosts;
  } else if (isSuccess) {
    if (searchTerm !== "") {
      // console.log(data);
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
      postsData = filteredPosts;
    } else {
      postsData = data;
    }

    const posts = postsData.map((post) => (
      <Post key={post.data.id} post={post.data} />
    ));

    return posts;
  } else if (isError) {
    content = <div className="error">{error.toString()}</div>;
  }
};

export default PostsList;
