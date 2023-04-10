
import ApiManager from "./ApiManager";

export const user_google_login= async (data) => {
    try{
     const result=await ApiManager('auth/user/google/signin',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        data:data
     })

     return result;
    }catch(error){
      return error.response.data
    }
}
export const phone_login= async (data) => {
    try{
     const result=await ApiManager('auth/signin/mobile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        data:data
     })

     return result;
    }catch(error){
      return error.response.data
    }
}
export const otp_verify= async (data) => {
    try{
     const result=await ApiManager('auth/otp/verify',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        data:data
     })

     return result;
    }catch(error){
      return error.response.data
    }
}