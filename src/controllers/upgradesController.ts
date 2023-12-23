import { Request, Response } from "express";
import { Upgrade } from "../models/Upgrades";

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
  

export { addUpgrade }
