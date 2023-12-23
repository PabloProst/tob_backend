import { Request, Response } from "express";
import { User } from "../models/User";

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        console.log(users);

        return res.json({
            users
        });
        

    } catch (error) {
        return res.json({
            success: false,
            message: `Users can't be retrieved`,
            error: error
        });
    }
};

export { getAllUsers }