import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin";
import {  getAllUsers} from "../controllers/adminController";
import { auth } from "../middlewares/auth";

const router = Router()

// Users list
router.get('/admin/users', auth, isAdmin, getAllUsers)

export { router }