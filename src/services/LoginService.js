import axios from "axios"
import config from "../config.json"
export async function LoginUser(user) {
    //debugger;
    const {data} =await axios.post(`https://localhost:44355/api/login`,user);
   // debugger;
    console.log(data.Messege);
    return  data;
}
const LoginMethod = { LoginUser };
export default LoginMethod;