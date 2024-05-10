import axios from "axios";

// const BASE_URL = "https://narcissus-backend.de.r.appspot.com/api";
const BASE_URL = "http://localhost:8080/api";

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
  //Authentication
  login(data){
    return axios.post(`${BASE_URL}/auth/authenticate`, data);
  }
  userProfile(token){
    return axios.get(`${BASE_URL}/auth/profile`, {
      headers: {
        'authentication': token
      }
    });
  }
  // Staff
  getAllStaff(){
    return axios.get(`${BASE_URL}/staff/find`);
  }
}

export default new APIService();
