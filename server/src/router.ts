import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("server is up and running");
});

export default router;
