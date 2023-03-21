import ReactMarkdown from "react-markdown";
import ReactTimeAgo from "react-time-ago";
import "./Comment.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getRandomInt } from "../../utils/utils";

const Comment = ({ comment = {} }) => {
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">
          {comment.author || <Skeleton width={`${getRandomInt(50, 150)}px`} />}
        </p>
        <p className="comment-created-time">
          {comment.created_utc ? (
            <ReactTimeAgo date={comment.created_utc * 1000} locale="en-US" />
          ) : (
            <Skeleton width={`${getRandomInt(9, 14)}ch`} />
          )}
        </p>
      </div>
      {comment.body ? (
        <div className="comment-body">
          <ReactMarkdown children={comment.body} />
        </div>
      ) : (
        <Skeleton count={getRandomInt(0, 5) + Math.random()} />
      )}
    </div>
  );
};

export default Comment;
