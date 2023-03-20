import "./Subreddit.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrntSubreddit,
  setCurrentSubreddit,
} from "../../app/currentSubredditSlice";
import {
  selectSdiebarVisible,
  setSidedbarVisible,
} from "../../app/sidebarVisible";

const Subreddit = ({ subreddit }) => {
  const currentSubreddit = useSelector(selectCurrntSubreddit);
  const sidebarVisible = useSelector(selectSdiebarVisible);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setCurrentSubreddit(subreddit.display_name));
    if (sidebarVisible) {
      dispatch(setSidedbarVisible(false));
    }
  };

  return (
    <li
      className={
        currentSubreddit === subreddit.display_name ? "current-subreddit" : ""
      }
    >
      <button onClick={handleOnClick} type="button">
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
