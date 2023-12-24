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

// Delete user
const deleteUser = async (req: Request, res: Response) => {
    try {
        const idUser = req.body.id;
        const user = await User.findOneBy({ id: idUser });

        if (user) {
            await User.delete({ id: idUser });
            return res.json({
                message: `User deleted`
            });
        } else {
            return res.json({
                success: false,
                message: `User was not found`
            });
        }

    } catch (error) {
        return res.json({
            success: false,
            message: `User can not be deleted`,
            error: error
        });
    }
}

//Get user by id
const getUserById = async (req:Request, res:Response) => {
    try {
        const userId  = Number(req.params.id);
        const user = await User.findOneBy({ id: userId });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
            return res.status(200).json({
          userId: user.id,
          name: user.name,
        });
      } catch (error) {
        console.error('Error getting user by ID:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    };


export { getAllUsers, deleteUser, getUserById }