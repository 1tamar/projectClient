import axios from "axios"
import config from "../config.json"
export async function GetAllRooms() {
    //debugger;
    const {data} =await axios.get(`https://localhost:44355/api/rooms`);
    console.log(data.Data);
    return  data.Data;
}
const RoomMethods = { GetAllRooms };
export default RoomMethods;