import "./Subreddit.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrntSubreddit,
  setCurrentSubreddit,
} from "./currentSubredditSlice";

const Subreddit = ({ subreddit }) => {
  // console.log(subreddit.title);
  const currentSubreddit = useSelector(selectCurrntSubreddit);
  const dispatch = useDispatch();

  return (
    <li
      className={
        currentSubreddit === subreddit.display_name ? "current-subreddit" : ""
      }
    >
      <button
        onClick={() => dispatch(setCurrentSubreddit(subreddit.display_name))}
        type="button"
      >
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
    </li>
  );
};

export default Subreddit;
