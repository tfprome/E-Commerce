import mongoose from "mongoose";
const DataSchema=new mongoose.Schema(
    {
        CategoryName:{type:String,required:true,unique:true},
        CategoryImg:{type:String,required:true}
    },
    {
        timestamps:true,versionKey:false
    }
)

const CategoryModel=mongoose.model('categories',DataSchema)
export default CategoryModel
