import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        Title:{type:String,required:true,unique:true},
        ShortDes:{type:String,required:true},
        Price:{type:String,required:true},
        Discount:{type:Boolean,required:true},
        DiscountPrice:{type:String,required:true},
        Image:{type:String,required:true},
        Star:{type:String,required:true},
        Stock:{type:Boolean,required:true},
        Reamrk:{type:String,required:true},
        CategoryID:{type:mongoose.Schema.Types.ObjectID,required:true},
        BrandID:{type:mongoose.Schema.Types.ObjectID,required:true}

    },
    {
        timestamps:true,versionKey:false
    }
)

const ProductModel=mongoose.model('products',DataSchema)
export default ProductModel
