import UrlAPIControllers from '../config/UrlServiceConfig';
import HttpServiceConfig from '../config/HttpServiceConfig';

export default class ProjectAPIController {
  getTrendingGithubRepositories = () => {
    const FETCH_URL = `${new UrlAPIControllers().repositoriesURL()}`;
    return new HttpServiceConfig().get(FETCH_URL);
  };

  getTrendingGithubDevelopers = () => {
    const FETCH_URL = `${new UrlAPIControllers().developersURL()}`;
    return new HttpServiceConfig().get(FETCH_URL);
  };
}
