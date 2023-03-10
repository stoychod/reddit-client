import { useGetCommentsQuery } from "../api/apiSlice";
import Comment from "../Comment/Comment";

const CommentsList = ({ permalink }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCommentsQuery(permalink);

  let comments;

  if (isLoading) {
    comments = "Loading...";
  } else if (isSuccess) {
    comments = data.map((comment) => {
      if (comment.kind === "more") {
        return;
      }
      return <Comment key={comment.data.id} comment={comment.data} />;
    });
  } else if (isError) {
    comments = <div>{error.toString()}</div>;
  }

  return comments;
};

export default CommentsList;
