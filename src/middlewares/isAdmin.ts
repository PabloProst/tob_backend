import { NextFunction, Response } from "express";


const isAdmin = (req: any, res: Response, next: NextFunction) => {
    console.log("Token:", req.token);
  
    if (req.token && req.token.role === "admin") {
      next();
    } else {
      console.log("User is not an admin:", req.token);
      return res.status(403).json({
        success: false,
        message: "Access forbidden. You are not an admin.",
      });
    }
  };
  
export { isAdmin }