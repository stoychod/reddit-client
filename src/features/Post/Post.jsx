import { useState } from "react";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiArrowUpThick,
  TiArrowDownThick,
  TiMessage,
} from "react-icons/ti";
import { decode } from "html-entities";
import ReactMarkdown from "react-markdown";
import { extractGalleryImgUrl, formatNumber } from "../../utils/utils";
import Image from "../../components/Image";
import Video from "../../components/Video";
import "./Post.css";
import CommentsList from "../CommentsList/CommentsList";
import ReactTimeAgo from "react-time-ago";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [vote, setVote] = useState("neutral");

  const onHandleVlote = (newVote) => {
    if (newVote === vote) {
      setVote("neutral");
    } else {
      setVote(newVote);
    }
  };

  const renderUpVoteIcon = () => {
    if (vote === "vote-up") {
      return <TiArrowUpThick className="icon-action" />;
    }
    return <TiArrowUpOutline className="icon-action" />;
  };

  const renderDownVoteIcon = () => {
    if (vote === "vote-down") {
      return <TiArrowDownThick className="icon-action" />;
    }
    return <TiArrowDownOutline className="icon-action" />;
  };

  let postContent;

  if (post.post_hint && post.post_hint === "image") {
    // post content is a single image
    postContent = <Image url={post.url} />;
  } else if (post.is_gallery) {
    // post content is a gallery of a few images
    const encodedUrl = extractGalleryImgUrl(
      post.gallery_data,
      post.media_metadata
    );
    url = decode(encodedUrl);
    postContent = <Image url={url} />;
  } else if (post.selftext) {
    // post content is markdown formated text
    // parse markdown and convert it to a react element
    postContent = <ReactMarkdown children={post.selftext} />;
  } else if (post.is_video) {
    const src = post.secure_media.reddit_video.fallback_url;
    postContent = <Video src={src} />;
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-votes-container">
          <button
            onClick={() => onHandleVlote("vote-up")}
            className={
              "icon-action-button post-vote-up" +
              (vote === "vote-up" ? " active" : "")
            }
          >
            {renderUpVoteIcon()}
          </button>
          <p className={"post-votes-number " + vote}>
            {formatNumber(post.score)}
          </p>
          <button
            onClick={() => onHandleVlote("vote-down")}
            className={
              "icon-action-button post-vote-down" +
              (vote === "vote-down" ? " active" : "")
            }
          >
            {renderDownVoteIcon()}
          </button>
        </div>
        <div className="post-container">
          <h3 className="post-title">{post.title}</h3>
          <div className="post-body">{postContent}</div>
          <div className="post-footer">
            <span className="post-comments-container">
              <button
                onClick={() => setShowComments(!showComments)}
                className={
                  "icon-action-button" +
                  (showComments ? " comments-visible" : "")
                }
              >
                <TiMessage className="icon-action" />
              </button>
              {formatNumber(post.num_comments)}
            </span>
            <span className="author-name">{`Posted by ${post.author}`}</span>
            <span>
              <ReactTimeAgo date={post.created_utc * 1000} locale="en-US" />
            </span>
          </div>
          {showComments && <CommentsList permalink={post.permalink} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
