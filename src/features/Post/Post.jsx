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

  let {
    title,
    author,
    selftext,
    score,
    url,
    post_hint,
    gallery_data,
    media_metadata,
    secure_media,
    permalink,
    num_comments: commentsCount,
    is_video: video,
    is_gallery: imageGallery,
  } = post;

  let postContent;

  if (post_hint && post_hint === "image") {
    // post content is a single image
    postContent = <Image url={url} />;
  } else if (imageGallery) {
    // post content is a gallery of a few images
    const encodedUrl = extractGalleryImgUrl(gallery_data, media_metadata);
    url = decode(encodedUrl);
    postContent = <Image url={url} />;
  } else if (selftext) {
    // post content is markdown formated text
    // parse markdown and convert it to a react element
    postContent = <ReactMarkdown children={selftext} />;
  } else if (video) {
    const src = secure_media.reddit_video.fallback_url;
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
          <p className={"post-votes-number " + vote}>{formatNumber(score)}</p>
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
          <h3 className="post-title">{title}</h3>
          {postContent}
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
              {formatNumber(commentsCount)}
            </span>
            <span className="author-name">{`Posted by ${author}`}</span>
            <span>
              <ReactTimeAgo date={post.created_utc * 1000} locale="en-US" />
            </span>
          </div>
          {showComments && <CommentsList permalink={permalink} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
