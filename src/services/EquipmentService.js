import axios from "axios"
import config from "../config.json"
export async function GettAllEquipment() {
    // debugger;
    const {data} =await axios.get(`https://localhost:44355/api/Equipment`);
    // console.log(data.Messege);
    return  data;
}
const GetEquipmentMethod = { GettAllEquipment };
export default GetEquipmentMethod;