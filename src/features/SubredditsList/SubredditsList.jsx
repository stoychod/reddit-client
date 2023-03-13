import { useGetSubredditsQuery } from "../api/apiSlice";
import Subreddit from "../Subreddit/Subreddit";

const SubredditsList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetSubredditsQuery();

  let subreddits;

  if (isLoading) {
    subreddits = "Loading...";
  } else if (isSuccess) {
    subreddits = data.map((subreddit) => {
      return <Subreddit key={subreddit.data.id} subreddit={subreddit.data} />;
    });
  } else if (isError) {
    subreddits = <div>{error.toString()}</div>;
  }

  return (
    <>
      <h2>Stbreddists</h2>
      {subreddits}
    </>
  );
};

export default SubredditsList;
