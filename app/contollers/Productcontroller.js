import { ListbyBrandService,
     ListbyCategoryService, 
     SlidersListService,
      ListbyRemarkService,
       DetailsService,ListbyKeywordService,ReviewListService } from "../Service/ProductService.js"

export const ProductListbySlider=async(req,res)=>{
    let data=await SlidersListService()
    return res.json(data)
}
export const ProductListbyBrand=async(req,res)=>{
    let data=await ListbyBrandService(req)
    return res.json(data)
}
export const ProductListbyCategory=async(req,res)=>{
    let data= await ListbyCategoryService(req)
    return res.json(data)
}
export const ProductListbyRemark=async(req,res)=>{
    let data= await ListbyRemarkService(req)
    return res.json(data)
}
export const ProductDetailsID=async(req,res)=>{
    let data =await DetailsService(req)
    return res.json(data)
}
export const ProductListbyKeyword=async(req,res)=>{
    let data =await ListbyKeywordService(req)
    return res.json(data)
}
 export const ProductReviewListbyID=async(req,res)=>{
    let data =await ReviewListService(req)
    return res.json(data)
}