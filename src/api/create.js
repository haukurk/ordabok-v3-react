import { create } from 'apisauce';

/*
 * apisauce is supported by reactotron. Awesomeee.
 */

// Create a base for API.
const api = create({
  baseURL: 'https://api-ordabok.hauxi.is/api/',
});

// TODO: Add headers for authentication if authenticated.

export default api;
