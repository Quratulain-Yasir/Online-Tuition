import jwt from "jsonwebtoken"

 //admin auth middleware

const authAdmin = (req, res , next) => {
 try {
    // logic to verify token

// get token from header
const {admintoken} = req.headers

if(!admintoken){
return res.json({success:false, message:"Not Authorized Login Again"})
}

// decode the token
const token_decode = jwt.verify(admintoken , process.env.SECRET_KEY)
// check if decoded token is same as the email&password
if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD ) {
    return res.json({success:false,message:"Not Authorized login again"})
}
// call the callback function if success
next()

 } catch (error) {
    res.json({succes:false,message:error.message})
 }
}

export default authAdmin