import { Router } from "express";
import { addUpgrade, deleteUpgrade, editUpgrade } from "../controllers/upgradesController";
import { isAdmin } from "../middlewares/isAdmin";
import { auth } from "../middlewares/auth";


const router = Router()

// New upgrade
router.post('/newupgrade', addUpgrade);
// Edit upgrade
router.put('/editupgrade/:id',auth, isAdmin, editUpgrade);
// Delete upgrade
router.delete('/deleteupgrade/:id', auth, isAdmin, deleteUpgrade);

export { router }