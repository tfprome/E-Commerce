import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        BrandName:{type:String,required:true,unique:true},
        BrandImg:{type:String,required:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const BrandModel=mongoose.model('brands',DataSchema)
export default BrandModel
