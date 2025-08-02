import { CreateWishService,RemoveWishService,ReadWishService } from "../Service/WishService.js"



export const CreateWish=async(req,res)=>{
    let data =await CreateWishService(req)
    return res.json(data)
}

export const RemoveWish=async(req,res)=>{
    let data =await RemoveWishService(req)
    return res.json(data)
}
export const ReadWish=async(req,res)=>{
    let data =await ReadWishService(req)
    return res.json(data)
}