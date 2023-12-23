import { Router } from "express";
import { addUpgrade } from "../controllers/upgradesController";


const router = Router()

// New upgrade
router.post('/newupgrade', addUpgrade);

export { router }