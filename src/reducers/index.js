import { combineReducers } from "redux";
import TrendingDevelopers from "./TrendingDevelopers";
import TrendingRepositories from "./TrendingRepositories";

export default combineReducers({
  TrendingDevelopers,
  TrendingRepositories,
});
