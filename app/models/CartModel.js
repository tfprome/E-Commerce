import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true},
        qty:{type:String,required:true},
        UserID:{type:mongoose.Schema.Types.ObjectID,required:true},
        Color:{type:String,required:true},
        Size:{type:String,required:true},
    },
    {
        timestamps:true,versionKey:false
    }
)

const CartModel=mongoose.model('carts',DataSchema)
export default CartModel

