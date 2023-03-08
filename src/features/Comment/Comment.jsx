import ReactMarkdown from "react-markdown";
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time"></p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
