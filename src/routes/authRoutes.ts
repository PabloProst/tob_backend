import { Router } from "express";
import { addUser, login } from "../controllers/authController";


const router = Router()

// User register
router.post('/register', addUser);
// User login
router.post('/login', login);

export { router }