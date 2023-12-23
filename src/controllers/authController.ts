import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import bcrypt from "bcrypt";


// User register
const addUser = async (req: Request, res: Response) => {
    try {
  
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
  
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailRegex.test(email)) {
        return res.json({ mensaje: `Invalid email address.` });
      }
  
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
      if (!passwordRegex.test(password)) {
        return res.json({
          mensaje: `The password must be at least 8 characters long, include at least one number, and have a special character.`
        });
      }
  
      const encryptedPassword = bcrypt.hashSync(password, 10);
  
      const newUser = await User.create({
        name: name,
        email: email,
        password: encryptedPassword
      }).save();
  
      return res.json({
        success: true,
        message: `User created succesfully.`,
        token: newUser
      });
  
    } catch (error) {
      return res.status(500).json(
        {
          success: false,
          message: `User can not be created.`,
          error: error
        }
      );
    }
  }

  export { addUser }