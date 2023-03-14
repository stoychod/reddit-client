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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getRandomInt } from "../../utils/utils";

const Post = ({ post = {} }) => {
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
    const url = decode(encodedUrl);
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
            {post.score ? formatNumber(post.score) : <Skeleton width="3ch" />}
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
          <h3 className="post-title">
            {post.title || <Skeleton width={`${getRandomInt(40, 80)}%`} />}
          </h3>
          <div className="post-body">
            {postContent || <Skeleton height={`${getRandomInt(250, 500)}px`} />}
          </div>
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
              {post.num_comments ? (
                formatNumber(post.num_comments)
              ) : (
                <Skeleton width="3ch" />
              )}
            </span>
            <span className="author-name">
              {post.author ? (
                `Posted by ${post.author}`
              ) : (
                <Skeleton width={`${getRandomInt(100, 150)}px`} />
              )}
            </span>
            <span>
              {post.created_utc ? (
                <ReactTimeAgo date={post.created_utc * 1000} locale="en-US" />
              ) : (
                <Skeleton width={`${getRandomInt(9, 14)}ch`} />
              )}
            </span>
          </div>
          {showComments && <CommentsList permalink={post.permalink} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
