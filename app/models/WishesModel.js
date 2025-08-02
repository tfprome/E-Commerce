import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true},
        UserID:{type:mongoose.Schema.Types.ObjectID,required:true}


    },
    {
        timestamps:true,versionKey:false
    }
)

const WishesModel=mongoose.model('wishes',DataSchema)
export default WishesModel
