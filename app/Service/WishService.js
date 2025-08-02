import WishesModel from "../models/WishesModel.js"
import mongoose from "mongoose"
const { ObjectId }=mongoose.Types;


export const CreateWishService=async(req)=>{
    try{let user_id=req.headers['user_id']
    let {productID}=req.body
    // console.log(productID,user_id)
    let postJSON={
    ProductID:productID,
    UserID:user_id}
    // console.log(postJSON)
     await WishesModel.updateOne(postJSON,{$set:postJSON},{upsert:true})
     return{status:'success',message:'Added to wishlist'}}
     catch(e){
        return {status:'failed',message:e.toString()}
     }

}

export const RemoveWishService=async(req)=>{
    try{let user_id=req.headers['user_id']
    //console.log(user_id)
    let {productID}=req.body
   
    let postJSON={
    ProductID:productID,
    UserID:user_id}
    //console.log(postJSON)
     await WishesModel.deleteOne(postJSON)
     return{status:'success',message:'Removed from wishlist'}}
     catch(e){
        return {status:'failed',message:e.toString()}
     }

}

export const ReadWishService=async(req)=>{
   console.log('ReadWishService invoked');
   try{
      let user_id=new ObjectId(req.headers['user_id'])
   console.log(user_id)
   let matchstage={$match:{UserID:user_id}}

   let Joinstageproduct={
      $lookup:{
         from:'products',
         localField:'ProductID',
         foreignField:'_id',
         as:'product'
      }
   }
   let data=await WishesModel.aggregate([
      matchstage,Joinstageproduct
   ])
   return{status:'success',message:'Read successfully',data:data}}
   catch(e){
      //console.log(e.toString())
      return {status:'failed'}
      
   }}
