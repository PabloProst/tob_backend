import { Game } from "../models/Game";
import { Request, Response } from "express";

const addScore = async (req: Request, res: Response) => {
    try {
      const { userId, score } = req.body;
  
      const game = new Game();
      game.userId = userId;
      game.score = score;
  
      await game.save();
  
      res.status(200).json({ message: "Score added successfully" });
    } catch (error) {
      console.error("Error creating score:", error);
      res.status(500).json({ error: "Internal Server Error: " + error });
    }
  };

  //Get ranking
  const getRanking = async (req: Request, res: Response) => {
    try {
        const ranking = await Game.find();

        console.log(ranking);
        return res.json({
            ranking,
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Ranking cant be retrieved',
            error: error,
        });
    }
  }
  

export { addScore, getRanking };
