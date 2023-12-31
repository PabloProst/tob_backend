import { Router } from "express";
import { addUpgrade, addUpgradeUser, deleteUpgrade, editUpgrade, getAllUpgrades, getUpgradesByUserId } from "../controllers/upgradesController";



const router = Router()

// New upgrade
router.post('/newupgrade', addUpgrade);
// Edit upgrade
router.put('/editupgrade/:id', editUpgrade);
// Delete upgrade
router.delete('/deleteupgrade/:id', deleteUpgrade);
// Get all upgrades
router.get('/upgrades', getAllUpgrades);
// New upgrade_user
router.post('/newupgradeuser', addUpgradeUser);
// Get Badges by ID
router.get('/myupgrades/:user_id', getUpgradesByUserId);

export { router }