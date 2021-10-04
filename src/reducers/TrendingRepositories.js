const INITIAL_STATE = { list: [], loading: true };
const TrendingRepositories = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "GET_TRENDING_REPOSITORIES": {
      return {
        ...state,
        list: payload,
        loading: false,
      };
    }
    case "CLEAR_TRENDING_REPOSITORIES": {
      return {
        ...INITIAL_STATE,
      };
    }

    default:
      return state;
  }
};

export default TrendingRepositories;
