import express from 'express'
import BrandModel from '../models/BrandModel.js'
import CategoryModel from '../models/CategoryModel.js'
import SlidersModel from '../models/SlidersModel.js'
import ProductModel from '../models/ProductModel.js'
import ReviewModel from '../models/ReviewModel.js'
import mongoose from 'mongoose';
const ObjectId =mongoose.Types.ObjectId;

export const BrandListService= async()=>{
    try{
        let data =await BrandModel.find()
        return{status:'success',data:data}
    }
    catch(e){
        return{status:'failed','message':e.toString()}
    }
}

export const CategoryListService= async()=>{
    try{
        let data =await CategoryModel.find()
        return{status:'success',data:data}
    }
    catch(e){
        return{status:'failed','message':e.toString()}
    }
}

export const SlidersListService=async(req)=>{
    let data = await SlidersModel.find()
    return{status:'success',data:data}
}

export const ListbyBrandService=async(req)=>{
 
    try {
        const BrandID =new ObjectId(req.params.BrandID);
    
        const MatchStage = { $match: { brandID: BrandID } };
    
        const JoinwithBrandStage = {
            $lookup: {
                from: 'brands',
                localField: 'brandID',
                foreignField: '_id',
                as: 'brand'
            }
        };
        
        const JoinwithCategoryStage = {
            $lookup: {
                from: 'categories',
                localField: 'categoryID',
                foreignField: '_id',
                as: 'category'
            }
        };
    
        const UnwindBrandStage = { $unwind: '$brand' };
        const UnwindCategoryStage = { $unwind: '$category' }; 
    
        const ProjectionStage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'categoryID': 0,
                'brandID': 0
            }
        };
    
        const data = await ProductModel.aggregate([
            MatchStage,
            JoinwithBrandStage,
            JoinwithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ]);
        return {status:"success",data:data}
    } catch (error) {
        console.error('Error during aggregation:', error);
        throw new Error('Database query failed');
    }
    
}
export const ListbyCategoryService=async(req)=>{
   
    try{
        let CategoryID=new ObjectId (req.params.CategoryID)
        let MatchStage={$match:{categoryID:CategoryID}}
         const JoinwithBrandStage = {
            $lookup: {
                from: 'brands',
                localField: 'brandID',
                foreignField: '_id',
                as: 'brand'
            }
        };
        
        const JoinwithCategoryStage = {
            $lookup: {
                from: 'categories',
                localField: 'categoryID',
                foreignField: '_id',
                as: 'category'
            }
        };
        const UnwindBrandStage = { $unwind: '$brand' };
        const UnwindCategoryStage = { $unwind: '$category' };
        const ProjectionStage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'categoryID': 0,
                'brandID': 0
            }
        };
        const data = await ProductModel.aggregate([
            MatchStage,
            JoinwithBrandStage,
            JoinwithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ]);
        return {status:'success',data:data};

    }
    catch(e){
        return {status:'fail','message':e.toString()};
    }
}

export const ListbyRemarkService=async(req)=>{
   
    try{
        let Remark=req.params.Remark
        let MatchStage={$match:{remark:Remark}}
         const JoinwithBrandStage = {
            $lookup: {
                from: 'brands',
                localField: 'brandID',
                foreignField: '_id',
                as: 'brand'
            }
        };
        
        const JoinwithCategoryStage = {
            $lookup: {
                from: 'categories',
                localField: 'categoryID',
                foreignField: '_id',
                as: 'category'
            }
        };
        const UnwindBrandStage = { $unwind: '$brand' };
        const UnwindCategoryStage = { $unwind: '$category' };
        const ProjectionStage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'categoryID': 0,
                'brandID': 0
            }
        };
        const data = await ProductModel.aggregate([
            MatchStage,
            JoinwithBrandStage,
            JoinwithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ]);
        return {status:'success',data:data};

    }
    catch(e){
        return {status:'fail','message':e.toString()};
    }
}
export const DetailsService=async(req)=>{
    try {
        const ProductID =new ObjectId(req.params.ProductID);
    
        const MatchStage = { $match: { _id:ProductID } };
    
        const JoinwithBrandStage = {
            $lookup: {
                from: 'brands',
                localField: 'brandID',
                foreignField: '_id',
                as: 'brand'
            }
        };
        
        const JoinwithCategoryStage = {
            $lookup: {
                from: 'categories',
                localField: 'categoryID',
                foreignField: '_id',
                as: 'category'
            }
        };
        const JoinwithDetailsStage = {
            $lookup: {
                from: 'productdetails',
                localField: '_id',
                foreignField: 'productID',
                as: 'details'
            }
        };
    
        const UnwindBrandStage = { $unwind: '$brand' }; // Consider adding preserveNullAndEmptyArrays: true if needed
        const UnwindCategoryStage = { $unwind: '$category' }; // Same as above
        const UnwindDetailsStage = { $unwind: '$details' }
    
        const ProjectionStage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'categoryID': 0,
                'brandID': 0
            }
        };
    
        const data = await ProductModel.aggregate([
            MatchStage,
            JoinwithBrandStage,
            JoinwithCategoryStage,JoinwithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ]);
        return data;
    } catch (error) {
        console.error('Error during aggregation:', error);
        throw new Error('Database query failed');
    }
}
export const ListbyKeywordService=async(req)=>{
   try{ let keyword=req.params.keyword
    let regex={'$regex':keyword,'$options':'i'}
    let SearchParams=[{title:regex},{ShortDes:regex}]
    let SearchQuery={$or:SearchParams}
    let MatchStage={$match:SearchQuery}
    const JoinwithBrandStage = {
        $lookup: {
            from: 'brands',
            localField: 'brandID',
            foreignField: '_id',
            as: 'brand'
        }
    };
    
    const JoinwithCategoryStage = {
        $lookup: {
            from: 'categories',
            localField: 'categoryID',
            foreignField: '_id',
            as: 'category'
        }
    };

    const UnwindBrandStage = { $unwind: '$brand' }; // Consider adding preserveNullAndEmptyArrays: true if needed
    const UnwindCategoryStage = { $unwind: '$category' }; // Same as above

    const ProjectionStage = {
        $project: {
            'brand._id': 0,
            'category._id': 0,
            'categoryID': 0,
            'brandID': 0
        }
    };

    let data = await ProductModel.aggregate([
        MatchStage,
        JoinwithBrandStage,
        JoinwithCategoryStage,
        UnwindBrandStage,
        UnwindCategoryStage,
        ProjectionStage
    ]);
    return{status:'success',data}}
    catch(e){
        return{status:'failed',data:e.toString()}
    }
}
export const ReviewListService=async(req)=>{
    try{let ProductID=new ObjectId(req.params.ProductID)
    let MatchStage={$match:{productID:ProductID}}
    let JoinwithProfileStage={$lookup:{from:'profiles',localField:'userID',foreignField:'userID',as:'profile'}}
    let UnwindProfileStage={$unwind:'$profile'}
    let ProjectionStage={$project:{'des':1,'rating':1,'profile.cus_name':1}}
    let data = await ReviewModel.aggregate([
        MatchStage,
        JoinwithProfileStage,
        //JoinwithCategoryStage,
        UnwindProfileStage,
        //UnwindCategoryStage,
        ProjectionStage
    ]);
    return {status:'success',data:data}}
    catch(e){
        return {status:'failed',data:e.toString()}
    }
}