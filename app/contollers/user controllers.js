import { CreateUserProfileService, LoginService, VerifyLoginService,ReadUserProfileService,  } from "../Service/userService.js"

export const login = async (req, res) => {
  let data= await LoginService(req)
  return res.json(data)

}
export const Verifylogin = async (req, res) => {
    let data=await VerifyLoginService(req)
    console.log(data)
    res.cookie('token',data.token)
    console.log(req.cookies)
    return res.json(data)

}
export const CreateUserProfile = async (req, res) => {
    let data=await CreateUserProfileService(req)
    return res.json(data)

}
export const UpdateUserProfile = async (req, res) => {
    try {
        
        return res.json({status:'Login is successful',})
    }
    catch (e) { res.json({ "Message": e.toString() }) }

}
export const ReadUserProfile=async(req,res) => {
    let data=await ReadUserProfileService(req)
    return res.json(data)
}

export const Logout = async (req, res) => {
    try {
      res.cookie('token', '', {
        expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
        httpOnly: true,
      });
      return res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Logout error:', error);
      return res.status(500).json({ status: 'fail', message: 'Logout failed' });
    }
  };