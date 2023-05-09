
import ApiManager from "./ApiManager";

export const user_google_login= async (data) => {
    try{
     const result=await ApiManager('/auth/mobile/update',{
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
export const login= async (data) => {
    try{
     const result=await ApiManager('auth/signin',{
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
// export const google_phone_login= async (data) => {
//     try{
//      const result=await ApiManager('auth/mobile/update',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         data:data
//      })

//      return result;
//     }catch(error){
//       return error.response.data
//     }
// }
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