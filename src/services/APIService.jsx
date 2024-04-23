import axios from "axios";

const BASE_URL = "https://narcissus-backend.de.r.appspot.com/api";

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
  getImage(imageURL, format) {
    const fixedImagePath = fixImagePath(imageURL);
    return axios.get(
      `${BASE_URL}/gallery/getImage?url=${fixedImagePath}&format=${format}`,
      { responseType: "arraybuffer" }
    );
  }
}

export default new APIService();
