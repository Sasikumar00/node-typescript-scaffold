import { Router } from "express";

let router = Router();

router.get("/home", (req, res) => {
  res.send("This is home");
});

export default router;
