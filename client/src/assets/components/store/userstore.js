import {create} from 'zustand'
import axios from 'axios'
import { setEmail,getEmail,unauthorized } from '../utility/utility.js'
import Cookies from 'js-cookie'

const userStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },


    LoginFormData:{email:''},

     
     LoginFormOnChange:(name,value)=>{
          set((state)=>({
              LoginFormData:{
               ...state.LoginFormData,
              [name]:value
              }
          })
      )},

     isFormSubmit:false,
     userOtpRequest :async(email)=>{
        set({isFormSubmit:true})
        let res=await axios.post('/api/login',{email:email})
        console.log(res)
        setEmail(email);
        set({isFormSubmit:false})
        return res.data.status==='success'
     },

     userLogoutRequest :async()=>{
        set({isFormSubmit:true})
        let res=await axios.get('/api/userlogout')
        console.log(res)
        set({isFormSubmit:false})
        return res.data.status==='success'
     },

     VerifyLoginRequest :async(otp)=>{
        set({isFormSubmit:true})
        let email=getEmail();
        let res=await axios.post('/api/verifylogin/',{email:email,otp:otp})
        console.log(res)
        //console.log("Response from /api/verifylogin:", res.data);
        if(res.data.status=='success')
            Cookies.set('token', res.data['token'])
        set({isFormSubmit:false})
        return res.data.status==='success'
     },


     OtpFormData:{otp:''},

     
     OtpFormOnChange:(name,value)=>{
          set((state)=>({
              OtpFormData:{
               ...state.OtpFormData,
              [name]:value
              }
          })
      )},

    ProfileForm:{cus_add:'',  cus_city:'', cus_country:'',  cus_fax:'', cus_name:'', cus_phone:'', cus_postcode:'', cus_state:'', ship_addship_city:'',   ship_country:'', ship_name:'',  ship_phone:'',  ship_postcode:'', ship_state:''},
   ProfileFormChange:(name,value)=>{
        set((state)=>({
          ProfileForm:{
             ...state.ProfileForm,
            [name]:value
            }
        })
    )},  

    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try{
            let res=await axios.get('/api/ReadUserProfile')
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data']})
                set({ProfileForm:res.data['data']})
            }
            else{
                set({ProfileDetails:[]})
            }
        }
        catch(e){
            unauthorized(e.response.status)
        }
    },

    ProfileSaveRequest:async(PostBody)=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.post(`/api/UpdateProfile`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    }


    

}
))

export default userStore;