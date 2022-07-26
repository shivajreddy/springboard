import axios from "axios";

const BASE_API_URL = "http://localhost:4000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // get by id
  static async getSnackId(id) {
    const result = await axios.get(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  static async getDrinkId(id) {
    const result = await axios.get(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }

  static async addSnack(item) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, item);
    return result.data;
  }

  static async addDrink(item) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, item);
    return result.data;
  }
}

export default SnackOrBoozeApi;
