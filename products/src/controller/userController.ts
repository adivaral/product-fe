import axios from 'axios';
import { apiConstant } from '../constant/api';
import CONFIG from '../enviroment';
import { UserLogin } from '../interfaces/userInterFace';
const userLogin = async (payload:UserLogin)=>{
    await axios.post(`${CONFIG.baseUrl}${apiConstant.userLogin}`,payload).then(async(res)=>{
        return await res;
    }).catch(async(err)=>{
        return await err;
    });
}

export {userLogin}
