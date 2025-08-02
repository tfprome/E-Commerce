import ProfilesModel from "../models/ProfilesModel.js"
import UsersModel from "../models/UsersModel.js"
import SendEmail from "../utility/Emailutility.js"
import { TokenEncode } from "../utility/Tokenutility.js"

export const LoginService=async(req)=>{
    try{let {email}=req.body
    console.log(email)
    let code=Math.floor(100000+Math.random()*900000)
    console.log(code)
    let EmailText=`Your verification code is ${code}`
    let EmailSubject='email verification'
    await SendEmail(email,EmailText,EmailSubject)
    await UsersModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
    return{status:'success',message:'otp is sent'}}
    catch(e){
        return{status:'failed',data:e.toString()}}
    }

export const VerifyLoginService=async(req,res)=>{
    try{
        let{email,otp}=req.body
        console.log(email,otp)
        let total=await UsersModel.findOne({email:email,otp:otp})
        //console.log(total)
        if(total){
            let user_id=await UsersModel.findOne({email:email,otp:otp}).select("_id")
            let token=await TokenEncode(email,user_id['_id'])
            await UsersModel.updateOne({email:email},{$set:{otp:'0'}})

            
            return {status:'success',message:'Valid ID',token:token}
            // console.log(data)
            // return data
        }
        else{
            return {status:'failed',message:'Invalid ID'} 
        }
    }
    catch(e){
        console.log(e)
        return {status:'error',data:e.toString()}
    }
    }

    export const CreateUserProfileService=async(req)=>{
    try{let user_id=req.headers.user_id
        // console.log(user_id)
    let ReqBody=req.body
    ReqBody.userID=user_id
    let data=await ProfilesModel.updateOne({userID:user_id},{$set:ReqBody},{upsert:true})
    return {status:'success',data:data}}
    catch(e){
        return {status:'failed',message:e.toString()}
    }
}
export const ReadUserProfileService=async (req)=>{
    try{

        let user_id=req.headers.user_id
        if (!user_id) {
            return { status: 'failed', message: 'User ID missing in headers' };
          }
      
        let data=await ProfilesModel.findOne({userID:user_id})
        return {status:'success',data:data}}
    catch(e){
        return {status:'failed error',message:e.toString()}
    }

    }


    
      


