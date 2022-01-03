import axios from "axios"
import config from "../config.json"
export async function GettAllRooms() {
    // debugger;
    const {data} =await axios.get(`https://localhost:44355/api/rooms`);
    // console.log(data.Messege);
    return  data;
}
const GetRoomsMethod = { GettAllRooms };
export default GetRoomsMethod;