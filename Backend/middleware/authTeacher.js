import  jwt from "jsonwebtoken"
const authTeacher = (req, res, next) => {
  try {
    const {ttoken}  = req.headers;  
    if (!ttoken) {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    const token_decode = jwt.verify(ttoken, process.env.SECRET_KEY);

    // ✅ Attach teacher ID to request object
    req.teachId = token_decode.teacherId; 

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};


export default authTeacher