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
  getAllBooking() {
    return axios.get(`${BASE_URL}/booking/find`);
  }
  deleteBooking(id, token) {
    return axios.delete(`${BASE_URL}/booking/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  updateBooking(id, data, token) {
    return axios.patch(`${BASE_URL}/booking/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
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
  updateRoom(id, data, token) {
    return axios.put(`${BASE_URL}/roomType/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  updateRoomImages(id, data, token) {
    return axios.patch(`${BASE_URL}/roomType/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  createRoom(data, token) {
    return axios.post(`${BASE_URL}/room/insert`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  createRoomType(data, token) {
    return axios.post(`${BASE_URL}/roomType/insert`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  // Gallery
  getAllImages() {
    return axios.get(`${BASE_URL}/gallery/find`);
  }
  getImageByRoom(id) {
    return axios.get(`${BASE_URL}/gallery/find/${id}`);
  }
  getImageByType(type) {
    return axios.get(`${BASE_URL}/gallery/findByType?type=${type}`);
  }
  uploadImage(data, token) {
    return axios.post(`${BASE_URL}/upload`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  deleteImage(imageName, token) {
    return axios.delete(`${BASE_URL}/delete/${imageName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  //Authentication
  login(data) {
    return axios.post(`${BASE_URL}/auth/authenticate`, data);
  }
  register(data){
    return axios.post(`${BASE_URL}/auth/register`, data);
  }
  userProfile(token) {
    return axios.get(`${BASE_URL}/auth/profile`, {
      headers: {
        authentication: token,
      },
    });
  }
  // Staff
  getAllStaff() {
    return axios.get(`${BASE_URL}/staff/find`);
  }
  updateStaff(id, data, token){
    return axios.put(`${BASE_URL}/staff/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

export default new APIService();
