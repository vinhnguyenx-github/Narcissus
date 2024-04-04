import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import APIService from '../../services/APIService'; // Giả sử bạn đã import APIService từ file khác

class RoomComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        APIService.getTypes()
            .then(response => {
                const { data } = response; // Trích xuất mảng dữ liệu từ response
                if (Array.isArray(data)) { // Kiểm tra xem dữ liệu là một mảng hay không
                    this.setState({ rooms: data });
                } else {
                    console.error('Data received from API is not an array:', data);
                }
            })
            .catch(error => {
                console.error('Failed to fetch room data:', error);
            });
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Room Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Room Id</th>
                            <th scope="col">Room Name</th>
                            <th scope="col">Room Description</th>
                            <th scope="col">Room Price</th>
                            <th scope="col">Room Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rooms.map(room => (
                            <tr scope="row" key={room.id}>
                                <td>{room.id}</td>
                                <td>{room.name}</td>
                                <td>{room.description}</td>
                                <td>{room.pricePerNight}</td>
                                <td>{room.capacity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RoomComponent;