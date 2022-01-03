import axios from "axios"
import config from "../config.json"
export async function GettAllRoomTypes() {
    // debugger;
    const {data} =await axios.get(`https://localhost:44355/api/RoomTyes`);
    // console.log(data.Messege);
    return  data;
}
const GetRoomTypeMethod = { GettAllRoomTypes };
export default GetRoomTypeMethod;