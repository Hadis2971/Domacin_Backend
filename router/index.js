import express from "express";

const router = express.Router();

router.use("/", (_, res) => {
  res.send("Hello World");
});

export default router;
