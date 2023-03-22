import { useGetCommentsQuery } from "../api/apiSlice";
import Comment from "../Comment/Comment";
import { getRandomInt } from "../../utils/utils";

const CommentsList = ({ permalink }) => {
  const { data, isFetching, isSuccess, isError, error } =
    useGetCommentsQuery(permalink);

  let comments;

  if (isFetching) {
    // comments = "Loading...";
    const loadingComments = Array(getRandomInt(3, 15))
      .fill(0)
      .map((item, index) => {
        return <Comment key={index} />;
      });

    return loadingComments;
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

  return <section>{comments}</section>;
};

export default CommentsList;
