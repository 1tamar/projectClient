import axios from "axios"
import config from "../config.json"
export async function AddInlay(objectToSend) {
    debugger;
    const {data} =await axios.post(`https://localhost:44355/api/Inley`,objectToSend);
     console.log(data.Messege);
    return  data;
}
const AddInlayMethod = { AddInlay };
export default AddInlayMethod;