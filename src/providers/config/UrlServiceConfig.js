export const baseURL = window.env.API_URL;

export class urlServiceConfig {
  repositoriesURL = () => `${baseURL}repositories`;
  
  developersURL = () => `${baseURL}developers`;

}

export default urlServiceConfig;
