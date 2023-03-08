import { useState } from "react";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from "react-icons/ti";
import { decode } from "html-entities";
import parse from "html-react-parser";
import { extractGalleryImgUrl } from "../../utils/utils";
import Image from "../../components/Image";
import Video from "../../components/Video";
import "./Post.css";
import CommentsList from "../CommentsList/CommentsList";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  let {
    title,
    author,
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
    selftext_html: encodedHtml,
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
  } else if (encodedHtml) {
    // post content is html text
    // remove html entities
    const decodedHtml = decode(encodedHtml);
    // parse html and convert it to a react element
    postContent = parse(decodedHtml);
  } else if (video) {
    const src = secure_media.reddit_video.fallback_url;
    postContent = <Video src={src} />;
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-votes-container">
          <button className=" icon-action-button post-vote-up">
            <TiArrowUpOutline className="icon-action" />
          </button>
          <p className="post-votes-number">{score}</p>
          <button className="icon-action-button post-vote-down">
            <TiArrowDownOutline className="icon-action" />
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
              {commentsCount}
            </span>
            <span className="author-name">{author}</span>
          </div>
          {showComments && <CommentsList permalink={permalink} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
