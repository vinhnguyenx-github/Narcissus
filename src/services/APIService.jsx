import axios from "axios";

const BASE_URL = "https://narcissus-backend.de.r.appspot.com";

function fixImagePath(imagePath) {
  return imagePath.replace(/\\/g, "/");
}

class APIService {
  //Booking
  booking(data) {
    return axios.post(`${BASE_URL}/booking/book`, data);
  }
  // Room
  getTypes() {
    return axios.get(`${BASE_URL}/roomType/find`);
  }
  getImageUrl(id) {
    return axios.get(`${BASE_URL}/roomType/getImage/${id}`);
  }
  getHotel(id) {
    return axios.get(`${BASE_URL}/roomType/findHotel/${id}`);
  }
  // Gallery
  getAllImages() {
    return axios.get(`${BASE_URL}/gallery/find`);
  }
  getImageByRoom(id) {
    return axios.get(`${BASE_URL}/gallery/find/${id}`);
  }
}

export default new APIService();
