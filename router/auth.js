import express from "express";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import { getModels } from "../models/config";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const { User } = getModels();

  const { username, firstName, lastName, address, password } = req.body;

  if (!username || !firstName || !lastName || !address || !password) {
    res
      .status(400)
      .json({ errorMsg: "Ime, Prezime, Adresa i Sifra su Obavezni!!!!" });
  }

  try {
    const foundUser = await User.findOne({
      where: { username },
    });

    if (foundUser) {
      res.status(400).json({ errorMsg: "Korisnicko Ime se vec Korsti!!!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({
      username,
      firstName,
      lastName,
      address,
      password: hash,
    });

    res.status(200).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { User } = getModels();

  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .json({ message: "Korisnicko Ime i Password su Obavezni!!!" });
    next();
  } else {
    try {
      const foundUser = await User.findOne({ where: { username } });

      if (!foundUser) {
        res.status(400).json({ message: "Korisnik nije Pronadjen!!!" });
      } else {
        const correctPassword = await bcrypt.compare(
          password,
          foundUser.password
        );

        const token = jsonwebtoken.sign(
          {
            id: foundUser.id,
            username,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            address: foundUser.address,
            email: foundUser.email,
            verified: foundUser.verified,
          },
          "secret"
        );

        if (correctPassword) {
          res.json(token);
        } else {
          res.status(400).json({ message: "Pogresni Podaci!!!" });
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

export default router;
