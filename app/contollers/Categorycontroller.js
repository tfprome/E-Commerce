import { CategoryListService } from "../Service/ProductService.js"

export const CategoryList = async(req,res)=>{
    let result=  await CategoryListService()
    return res.json(result)
}