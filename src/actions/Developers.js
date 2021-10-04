import GithubAPIControllerGithubAPIController from "../providers/controllers/GithubAPIController";

const getGithubDeveloper = (payload) => {
  return {
    type: "GET_TRENDING_DEVELOPERS",
    payload,
  };
};

const trendingGithubs = () => async (dispatch) => {
  try {
    new GithubAPIControllerGithubAPIController()
      .getTrendingGithubDevelopers()
      .then((res) => {
        dispatch(getGithubDeveloper(res));
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};

export default trendingGithubs;
