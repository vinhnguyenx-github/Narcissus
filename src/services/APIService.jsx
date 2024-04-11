import axios from "axios";

const BASE_URL = "http://localhost:8080/api/roomType";

class APIService {
  getTypes() {
    return axios.get(`${BASE_URL}/find`);
  }
  getImageUrl(id) {
    return `${BASE_URL}/getImage/${id}`;
  }
}

export default new APIService();
