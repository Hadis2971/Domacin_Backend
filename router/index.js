import express from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import { getModels } from "../models/config";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const { User } = getModels();

  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .json({ errorMsg: "Username and Password are both mandatory!!!" });
  }

  const foundUser = await User.findOne({
    where: { username },
  });

  if (foundUser) {
    res.status(400).json({ errorMsg: "Username Already Taken!!!" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  await User.create({ username, password: hash });

  res.status(200).send();
});

router.post("/login", async (req, res, next) => {
  const { User } = getModels();

  const { username, password } = req.body;

  if (!username | !password) {
    res
      .status(400)
      .json({ errorMsg: "Username and Password are both mandatory!!!" });
    next();
  } else {
    const foundUser = await User.findOne({ where: { username } });

    if (!foundUser) {
      res.status(400).json({ errorMsg: "User Not Found!!!" });
    } else {
      const correctPassword = await bcrypt.compare(
        password,
        foundUser.password
      );

      const token = jsonwebtoken.sign({ username, password }, "secret");

      if (correctPassword) {
        res.json(token);
      } else {
        res.status(400).json({ errorMsg: "Wrond Credentials!!!" });
      }
    }
  }
});

router.use("/", (_, res) => {
  res.send("Hello World");
});

export default router;
