import { Router } from "express";
import { addUpgrade, deleteUpgrade, editUpgrade, getAllUpgrades } from "../controllers/upgradesController";
import { isAdmin } from "../middlewares/isAdmin";
import { auth } from "../middlewares/auth";


const router = Router()

// New upgrade
router.post('/newupgrade', addUpgrade);
// Edit upgrade
router.put('/editupgrade/:id', editUpgrade);
// Delete upgrade
router.delete('/deleteupgrade/:id', deleteUpgrade);
// Get all upgrades
router.get('/upgrades', getAllUpgrades);

export { router }