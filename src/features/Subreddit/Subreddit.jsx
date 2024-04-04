import { decode } from "html-entities";
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

  let iconSource;

  if (subreddit.icon_img) {
    iconSource = subreddit.icon_img;
  } else if (subreddit.community_icon) {
    iconSource = decode(subreddit.community_icon);
  }

  return (
    <li
      className={
        currentSubreddit === subreddit.display_name ? "current-subreddit" : ""
      }
    >
      <button onClick={handleOnClick} type="button">
        {iconSource ? (
          <img
            className="subreddit-icon"
            src={iconSource}
            alt={`${subreddit.display_name}`}
            style={{ border: `3px solid ${subreddit.primary_color}` }}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="25"
            height="25"
            className="subreddit-icon"
            fill="#44bcd8"
            
            style={{ border: `3px solid grey` }}
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>
          </svg>
        )}
        {subreddit.display_name}
      </button>
    </li>
  );
};

export default Subreddit;
