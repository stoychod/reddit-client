import Post from '../Post/Post'
import { useGetPostsQuery } from '../api/apiSlice'

export const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("home");

  let content;

  if (isLoading) {
    content = "Loading...";
  } else if (isSuccess) {
    content = posts.map((post) => <Post key={post.data.id} post={post.data} />);
    // console.log(posts);
    // posts.forEach(element => {
    //   console.log(element.data)
    // });
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  // return <Post />;
  return content;
};
