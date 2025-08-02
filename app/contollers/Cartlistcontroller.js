import  {CartListService,RemoveCartListService,SaveCartListService,UpdateCartListService} from "../service/CartServicce.js";


export const CartList=async(req,res)=>{
    console.log("Entered CartList controller"); 
    let result=await CartListService(req);
    return res.status(200).json(result)
}

export const SaveCartList=async(req,res)=>{
    let result=await SaveCartListService(req);
    return res.status(200).json(result)
}

export const UpdateCartList=async(req,res)=>{
    let result=await UpdateCartListService(req);
    return res.status(200).json(result)
}

export const RemoveCartList=async(req,res)=>{
    let result=await RemoveCartListService(req);
    return res.status(200).json(result)
}

