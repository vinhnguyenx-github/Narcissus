import axios from 'axios';

const ROOM_API_REST_URL = "http://localhost:8080/api/roomType/find";

class APIService {
    
    getTypes(){
        return axios.get(ROOM_API_REST_URL);
    }

}

export default new APIService();