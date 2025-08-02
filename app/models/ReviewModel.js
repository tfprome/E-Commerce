import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true},
        Des:{type:String,required:true},
        UserID:{type:mongoose.Schema.Types.ObjectID,required:true},
        Ratings:{type:String,required:true},
    },
    {
        timestamps:true,versionKey:false
    }
)

const ReviewModel=mongoose.model('reviews',DataSchema)
export default ReviewModel
