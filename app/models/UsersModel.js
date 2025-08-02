import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        email:{type:String,required:true,lowercase:true},
        otp:{type:String,required:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const UsersModel=mongoose.model('users',DataSchema)
export default UsersModel
