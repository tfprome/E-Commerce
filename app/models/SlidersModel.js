import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        Title:{type:String,required:true},
        Des:{type:String,required:true},
        Price:{type:String,required:true},
        Img:{type:String,required:true},
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const SlidersModel=mongoose.model('productsliders',DataSchema)
export default SlidersModel
