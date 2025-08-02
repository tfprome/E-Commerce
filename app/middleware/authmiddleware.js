import { TokenDecode } from "../utility/Tokenutility.js"

export default (req,res,next)=>{
    let token=req.cookie['token']
    

    let decoded=TokenDecode(token)
    if(decoded==null){
        return res.status(404).json({status:'failed'})
    }
    else{
        let email=decoded.email
        let user_id=decoded.user_id
        req.headers.email=email
        req.headers.user_id=user_id
        next()
    }
}