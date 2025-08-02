import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        Img1:{type:String,required:true},
        Img2:{type:String,required:true},
        Img3:{type:String,required:true},
        Img4:{type:String,required:true},
        Img5:{type:String},
        Img6:{type:String},
        Img7:{type:String},
        Img8:{type:String},
        Des:{type:String,required:true},
        Color:{type:String,required:true},
        Size:{type:String,required:true},
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const DetailsModel=mongoose.model('productdetails',DataSchema)
export default DetailsModel
