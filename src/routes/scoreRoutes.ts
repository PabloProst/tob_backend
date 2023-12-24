import { Router } from "express";
import { addScore, getRanking } from "../controllers/scoreController";
// import { auth } from "../middlewares/auth";


const router = Router()


// New score
router.post('/score' , addScore);
// Get Ranking
router.get('/allscores', getRanking)

export { router }