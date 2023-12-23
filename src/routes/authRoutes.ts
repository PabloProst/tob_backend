import { Router } from "express";
import { addUser } from "../controllers/authController";


const router = Router()

// User register
router.post('/register', addUser);

export { router }