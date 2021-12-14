import axios from "axios"
import config from "../config.json"
export async function SignupUser(user) {
    debugger;
    const {data} =await axios.post(`https://localhost:44355/api/signup`,user);
    console.log(data.Messege);
    return  data;
}
const SignupMethod = { SignupUser };
export default SignupMethod;