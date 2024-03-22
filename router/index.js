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

  if (!username || !password) {
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

      const token = jsonwebtoken.sign(
        { id: foundUser.id, username, password },
        "secret"
      );

      if (correctPassword) {
        res.json(token);
      } else {
        res.status(400).json({ errorMsg: "Wrong Credentials!!!" });
      }
    }
  }
});

router.get("/products", async (req, res) => {
  const { Product, ProductImage } = getModels();

  const products = await Product.findAll();

  const response = await Promise.all(
    products.map(async (product) => {
      const images = await ProductImage.findAll({
        where: { ProductId: product.id },
      });

      const imageUrls = images.map(({ url }) => url);

      return { ...product.toJSON(), images: imageUrls };
    })
  );

  res.json(response);
});

const OrderStatus = {
  Pending: 1,
  Fulfilled: 2,
};

router.post("/order", async (req, res) => {
  //{ userId: 1, order: [ { id: 1, quantity: 1 } ] }
  const { userId, address, email, order } = req.body;

  try {
    const { Order, User, OrderProduct } = getModels();
    const newOrder = await Order.create({
      status: OrderStatus.Pending,
      address,
      email,
    });

    const user = await User.findByPk(userId);

    newOrder.setUser(user);

    await Promise.all(
      order.map((order) => {
        OrderProduct.create({
          OrderId: newOrder.id,
          ProductId: order.id,
          quantity: order.quantity,
        });
      })
    );

    res.status(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.use("/", (_, res) => {
  res.send("Hello World");
});

export default router;
