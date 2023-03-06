import { useEffect } from 'react'
import { TiArrowUpOutline, TiArrowDownOutline, TiMessage } from 'react-icons/ti'
import { decode } from 'html-entities'
import parse from 'html-react-parser'
import { extractGalleryImgUrl } from '../../utils/utils'
import Image from '../../components/Image'
import "./Post.css"

const Post = ({ post }) => {

  let { title, author, num_comments: commentsCount, score, url, is_gallery: imageGallery, selftext_html: encodedHtml, post_hint } = post;
  // const title = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
  // const author = "AuthorName";
  // const commentsCount = 40;
  // const votesNumber = "8.8k"


  // useEffect(() => {
  //   console.log(getSubreddit("home"));
  // })
  let postContent;

  if (post_hint && post_hint === "image") {
    console.log("image")
    postContent = < Image url={url} />;
  } else if (imageGallery) {
    url = extractGalleryImgUrl(post.media_metadata);
    postContent = < Image url={url} />;
  } else if (encodedHtml) {
    // remove html entities
    const decodedHtml = decode(encodedHtml);
    // parse html and convert it to a react element
    postContent = parse(decodedHtml);
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
              <button className="icon-action-button">
                <TiMessage className="icon-action" />
              </button>
              {commentsCount}
            </span>
            <span className="author-name">{author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
