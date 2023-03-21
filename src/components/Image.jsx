const Image = ({ url }) => {
  return (
    <div className="post-image-container">
      <img src={url} className="post-image"  alt="post image"/>
    </div>
  )
}

export default Image;
