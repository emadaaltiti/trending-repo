import ServerConfig from './ServerConfig';

export default class HttpServiceConfig {
  get = (apiUrl) =>
    new Promise((resolve, reject) => {
      fetch(apiUrl, {
        method: 'GET',
        headers: new ServerConfig().getHeader(),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
