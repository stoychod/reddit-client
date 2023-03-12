import Post from "../Post/Post";
import { useGetPostsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../Header/searchTermSlice";

export const PostsList = () => {
  let {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("pics");

  const searchTerm = useSelector(selectSearchTerm);

  const filterPosts = (posts, searchTerm) => {
    return posts.filter((post) => {
      return post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  let content;

  if (isLoading) {
    content = "Loading...";
  } else if (isSuccess) {
    if (searchTerm !== "") {
      posts = filterPosts(posts, searchTerm);
    }
    content = posts.map((post) => <Post key={post.data.id} post={post.data} />);
    // console.log(posts);
    // posts.forEach(element => {
    //   console.log(element.data)
    // });
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  // return <Post />;
  return content;
};
