const Video = ({ src }) => {
  return (
    <div className="post-video-container">
      <video className="post-video" controls="controls">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
