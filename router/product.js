import express from "express";

import { getModels } from "../models/config";

const router = express.Router();

const OrderStatus = {
  Pending: 1,
  Fulfilled: 2,
};

export const Categories = {
  Catgory1: 1,
  Catgory2: 2,
  Catgory3: 3,
  Catgory4: 4,
  Catgory5: 5,
  Catgory6: 6,
  Catgory7: 7,
  Catgory8: 8,
  Catgory9: 9,
  Catgory10: 10,
  Catgory11: 11,
  Catgory12: 12,
  Catgory13: 13,
  Catgory14: 14,
  Catgory15: 15,
  Catgory16: 16,
};

router.post("/order", async (req, res) => {
  //{ userId: 1, order: [ { id: 1, quantity: 1 } ] }
  const { userId, firstName, lastName, address, email, order } = req.body;

  try {
    const { Order, User, OrderProduct } = getModels();
    const newOrder = await Order.create({
      status: OrderStatus.Pending,
      firstName,
      address,
      lastName,
      email,
    });

    if (userId) {
      const user = await User.findByPk(userId);

      newOrder.setUser(user);
    }

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

router.get("/", async (req, res) => {
  const { Product, ProductImage, ProductCategory } = getModels();

  try {
    const products = await Product.findAll();

    const response = await Promise.all(
      products.map(async (product) => {
        const images = await ProductImage.findAll({
          where: { ProductId: product.id },
        });

        const categories = await ProductCategory.findAll({
          where: { ProductId: product.id },
        });

        const categoryIds = categories.map(({ CategoryId }) => CategoryId);

        const imageUrls = images.map(({ url }) => url);

        return {
          ...product.toJSON(),
          images: imageUrls,
          categories: categoryIds,
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
