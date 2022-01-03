import axios from "axios"
import config from "../config.json"
export async function AddInlay(inlay,inlayEq) {
    debugger;
    const {dataInlay} =await axios.post(`https://localhost:44355/api/Inley`,inlay);
    const {dataInlayEq} =await axios.post(`https://localhost:44355/api/Inley`,inlayEq);

    // console.log(data.Messege);
    //return  data;
}
const AddInlayMethod = { AddInlay };
export default AddInlayMethod;