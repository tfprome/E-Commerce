import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        ProductID:{type:mongoose.Schema.Types.ObjectID,required:true},
        UserID:{type:mongoose.Schema.Types.ObjectID,required:true},
        InvoiceID:{type:mongoose.Schema.Types.ObjectID,required:true},
        Color:{type:String,required:true},
        qty:{type:String,required:true},
        Price:{type:String,required:true},
        Size:{type:String,required:true}


    },
    {
        timestamps:true,versionKey:false
    }
)

const InvoiceProductModel=mongoose.model('invoiceproducts',DataSchema)
export default InvoiceProductModel

