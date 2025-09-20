import  jwt from "jsonwebtoken"
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    const token_decode = jwt.verify(token, process.env.SECRET_KEY);

    // ✅ Attach user ID to request object
    req.stdId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};


export default authUser