import { Request, Response } from "express";
import { Upgrade } from "../models/Upgrades";
import { User } from "../models/User";
import { UpgradesUsers } from "../models/UpgradesUser";

// New upgrade
const addUpgrade = async (req: Request, res: Response) => {
    try {
      const name = req.body.name;
      const description = req.body.description;
      const cost = req.body.cost;
  
      const newUpgrade = await Upgrade.create({
        name: name,
        description: description,
        cost: cost
      }).save();
  
      return res.json({
        success: true,
        message: `Upgrade created successfully.`,
        upgrade: newUpgrade
      });
  
    } catch (error) {
      console.error("Error en addUpgrade:", error);
      return res.status(500).json({
        success: false,
        message: `Upgrade cannot be created.`,
        error: error || "Internal Server Error"
      });
    }
  }
  

  // Edit upgrade
  const editUpgrade = async (req: Request, res: Response) => {
    try {
      const upgradeId = req.params.id;
      const { name, description, cost } = req.body;
  
      console.log(`Updating upgrade with ID: ${upgradeId}`);
  
      const updates: any = {};
  
      if (name) {
        updates.name = name;
        console.log(`Name updated successfully: ${name}`);
      }
  
      if (description) {
        updates.description = description;
        console.log(`Description updated successfully: ${description}`);
      }
  
      if (cost) {
        updates.cost = cost;
        console.log(`Cost updated successfully: ${cost}`);
      }
  
      await Upgrade.update(upgradeId, updates);
      console.log(`Upgrade updated successfully`);
  
      return res.json({
        success: true,
        message: `Upgrade information updated successfully.`,
      });
    } catch (error) {
      console.error(`Error updating upgrade information: ${error}`);
      return res.status(500).json({
        success: false,
        message: `Error updating upgrade information.`,
        error: error || "Internal Server Error",
      });
    }
  };


  // Delete upgrade
  const deleteUpgrade = async (req: Request, res: Response) => {
    try {
        const idUpgrade = Number(req.params.id);
        const upgrade = await Upgrade.findOneBy({ id: idUpgrade });

        if (upgrade) {
            await Upgrade.delete({ id: idUpgrade });
            return res.json({
                success: true,
                message: `Upgrade deleted`
            });
        } else {
            return res.json({
                success: false,
                message: `Upgrade was not found`
            });
        }

    } catch (error) {
        return res.json({
            success: false,
            message: `Upgrade can not be deleted`,
            error: error
        });
    }
};


// Get all upgrades
const getAllUpgrades = async (req: Request, res: Response) => {
  try {
    const upgrades = await Upgrade.find();
    return res.json({
      success: true,
      message: 'Upgrades retrieved successfully.',
      upgrades: upgrades,
    });
  } catch (error) {
    console.error('Error getting upgrades:', error);
    return res.status(500).json({
      success: false,
      message: 'Error getting upgrades.',
      error: error || 'Internal Server Error',
    });
  }
};


// Add upgrade_user
const addUpgradeUser = async (req: Request, res: Response) => {
  try {
    const upgrade_id = req.body.upgrade;
    const user_id = req.body.user;

    const newUpgradeUser = await UpgradesUsers.create({
      upgrade_id: upgrade_id,
      user_id: user_id
    }).save();

    return res.json({
      success: true,
      message: 'Created succesfully',
      token: newUpgradeUser
    });
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: `Can not be created.`,
        error: error
      }
    );
  }
}




export { addUpgrade, editUpgrade, deleteUpgrade, getAllUpgrades, addUpgradeUser }
