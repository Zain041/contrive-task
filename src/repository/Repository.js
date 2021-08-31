import axios from 'axios';


const baseDomain = 'https://gorest.co.in';

const baseURL = `${baseDomain}/public/v1`;
const token = localStorage.getItem('token')

let axiosObj
  axiosObj = axios.create({
    baseURL,
    headers:{
      'x-auth-token':token
    }
    
    
  
  });
export default axiosObj;