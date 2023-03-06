const Image = ({ url }) => {
  return (
    <div className="post-image-container">
      <img src={url} className="post-image" />
    </div>
  )
}

export default Image;
