import { useEffect } from 'react'
import { TiArrowUpOutline, TiArrowDownOutline, TiMessage } from 'react-icons/ti'
import { decode } from 'html-entities'
import parse from 'html-react-parser'
import { extractGalleryImgUrl } from '../../utils/utils'
import "./Post.css"

const Post = ({ post }) => {

  let { title, author, num_comments: commentsCount, score, url, is_gallery: imageGallery, selftext_html: postText } = post;
  // const title = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
  // const author = "AuthorName";
  // const commentsCount = 40;
  // const votesNumber = "8.8k"


  // useEffect(() => {
  //   console.log(getSubreddit("home"));
  // })
  let postContent;

  if (postText) {
    // console.log(postText)
    // remove html entities
    postContent = decode(postText);
  } else if (imageGallery) {
    url = extractGalleryImgUrl(post.media_metadata);
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
          {postContent && parse(postContent)}
          <div className="post-image-container">
            <img src={url} className="post-image" />
          </div>
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
