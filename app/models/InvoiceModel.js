import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        
        UserID:{type:mongoose.Schema.Types.ObjectID,required:true},
        Cus_details:{type:String,required:true},
        Ship_details:{type:String,required:true},
        Tran_id:{type:String,required:true},
        Val_id:{type:String,required:true},
        Payment_status:{type:String,required:true},
        Delivery_status:{type:String,required:true},
        Total:{type:String,required:true},
        Vat:{type:String,required:true},
        Payable:{type:String,required:true},
    },
    {
        timestamps:true,versionKey:false
    }
)

const InvoiceModel=mongoose.model('invoices',DataSchema)
export default InvoiceModel

