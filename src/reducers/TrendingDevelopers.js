const INITIAL_STATE = { list: [], loading: true };
const TrendingDevelopers = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'GET_TRENDING_DEVELOPERS': {
      return {
        ...state,
        list: payload,
        loading: false,
      };
    }
    case 'CLEAR_TRENDING_DEVELOPERS': {
      return {
        ...INITIAL_STATE,
      };
    }

    default:
      return state;
  }
};

export default TrendingDevelopers;
