import "./Subreddit.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentSubreddit,
  setCurrentSubreddit,
} from "../../app/currentSubredditSlice";
import {
  selectSidebarVisible,
  setSidebarVisible,
} from "../../app/sidebarVisibleSlice";

const Subreddit = ({ subreddit }) => {
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const sidebarVisible = useSelector(selectSidebarVisible);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setCurrentSubreddit(subreddit.display_name));
    if (sidebarVisible) {
      dispatch(setSidebarVisible(false));
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
