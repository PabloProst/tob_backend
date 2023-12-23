import { Router } from "express";
import { addUpgrade, editUpgrade } from "../controllers/upgradesController";
import { isAdmin } from "../middlewares/isAdmin";
import { auth } from "../middlewares/auth";


const router = Router()

// New upgrade
router.post('/newupgrade', addUpgrade);
router.put('/editupgrade/:id',auth, isAdmin, editUpgrade);

export { router }