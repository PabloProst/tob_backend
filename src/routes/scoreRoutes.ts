import { Router } from "express";
import { addScore } from "../controllers/scoreController";


const router = Router()


// New score
router.post('/score',addScore);

export { router }