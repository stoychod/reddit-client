import ReactMarkdown from "react-markdown";
import ReactTimeAgo from 'react-time-ago'
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          <ReactTimeAgo date={comment.created_utc * 1000} locale="en-US" />
        </p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
