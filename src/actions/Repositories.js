import GithubAPIControllerGithubAPIController from "../providers/controllers/GithubAPIController";

const getGithubRepositories = (payload) => {
  return {
    type: "GET_TRENDING_REPOSITORIES",
    payload,
  };
};

const trendingGithubs = () => async (dispatch) => {
  try {
    new GithubAPIControllerGithubAPIController()
      .getTrendingGithubRepositories()
      .then((res) => {
        dispatch(getGithubRepositories(res));
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};

export default trendingGithubs;
