import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class for sending GET/POST to the API.
 * All ajax calls to the backend are inside this class, shouldn't be anywhere else.
 *
 */

export class JoblyAPI {
  // The token for interacting with the API
  static token;

  // Get the Jobs List
  static async getJobs(title, salary, equity) {
    try {
      const resp = await axios.get(BASE_URL + "/jobs");
      console.log("axios call to /jobs", resp.data);
      return resp.data.jobs;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
