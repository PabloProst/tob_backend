import { Router } from "express";
import { addUser, login, profile } from "../controllers/authController";
import { auth } from "../middlewares/auth";


const router = Router()

// User register
router.post('/register', addUser);
// User login
router.post('/login', login);
// Profile
router.get('/profile', auth, profile);

export { router }