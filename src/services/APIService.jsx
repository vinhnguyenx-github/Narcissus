import axios from "axios";

const ROOM_URL = "http://localhost:8080/api/roomType";

const GALLERY_URL = "http://localhost:8080/api/gallery";

function fixImagePath(imagePath) {
  return imagePath.replace(/\\/g, "/");
}

class APIService {
  // Room
  getTypes() {
    return axios.get(`${ROOM_URL}/find`);
  }
  getImageUrl(id) {
    return axios.get(`${ROOM_URL}/getImage/${id}`);
  }
  getHotel(id) {
    return axios.get(`${ROOM_URL}/findHotel/${id}`);
  }
  // Gallery
  getAllImages() {
    return axios.get(`${GALLERY_URL}/find`);
  }
  getImageByRoom(id) {
    return axios.get(`${GALLERY_URL}/find/${id}`);
  }
  getImage(imageURL, format) {
    const fixedImagePath = fixImagePath(imageURL);
    return axios.get(
      `${GALLERY_URL}/getImage?url=${fixedImagePath}&format=${format}`,
      { responseType: "arraybuffer" }
    );
  }
}

export default new APIService();
