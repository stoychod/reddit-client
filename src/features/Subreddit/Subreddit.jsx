import "./Subreddit.css";

const Subreddit = ({ subreddit }) => {
  // console.log(subreddit.title);
  return (
    <button type="button">
      <img
        className="subreddit-icon"
        src={
          subreddit.icon_img ||
          `https://api.adorable.io/avatars/25/${subreddit.display_name}`
        }
        alt={`${subreddit.display_name}`}
        style={{ border: `3px solid ${subreddit.primary_color}` }}
      />
      {subreddit.display_name}
    </button>
  );
};

export default Subreddit;
