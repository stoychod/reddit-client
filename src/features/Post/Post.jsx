import "./Post.css"
import { TiArrowUpOutline, TiArrowDownOutline, TiMessage } from 'react-icons/ti'

const Post = () => {

  const title = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
  const author = "AuthorName";
  const commentsCount = 40;
  const votesNumber = "8.8k"

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-votes-container">
          <TiArrowUpOutline />
          <p>{votesNumber}</p>
          <TiArrowDownOutline />
        </div>
        <div className="post-container">
          <h3>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h3>
          <div className="post-image-container">
            <img src="../../../assets/0tg7wbrj5uka1.jpg" className="post-image" />
          </div>
          <div className="post-footer">
            <span className="post-comments"><TiMessage />{commentsCount}</span>
            <span className="author-name">{author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
