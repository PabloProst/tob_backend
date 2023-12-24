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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { addScore };
