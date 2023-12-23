import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin";
import {  getAllUsers, deleteUser} from "../controllers/adminController";
import { auth } from "../middlewares/auth";

const router = Router()

// Users list
router.get('/admin/users', auth, isAdmin, getAllUsers)
// Delete user
router.delete('/admin/delete', auth, isAdmin, deleteUser)

export { router }