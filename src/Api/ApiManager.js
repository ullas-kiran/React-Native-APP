import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ApiManager=axios.create({
    baseURL:'https://hyfyserver.vercel.app',
    responseType:'json',
    withCredentials:true
})

ApiManager.interceptors.request.use(
   async config =>  {
      if (!config.headers.token) {
        const value = await AsyncStorage.getItem('AccessToken');
        if (value !== null) {
        config.headers.token = JSON.parse(value);
        }
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );


  


export default ApiManager;