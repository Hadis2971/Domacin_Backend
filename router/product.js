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
  const { Order, User, Product, OrderProduct } = getModels();

  if (!order.length) {
    res.status(400).json({ message: "Narudzba ne moze biti prazna!!!" });

    return;
  }

  try {
    await Promise.all(
      order.map(async (order) => {
        const product = await Product.findByPk(order.id);

        if (product.stock < order.quantity)
          Promise.reject(
            "Proizvod " +
              product.name +
              " nema na zalihama dovoljno ova narudzba nije prihvacena. Raspolozivost: " +
              product.stock
          );
      })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.reason });
    return;
  }

  try {
    const newOrder = await Order.create({
      status: OrderStatus.Pending,
      firstName,
      address,
      lastName,
      email,
    });

    if (userId) {
      const user = await User.findByPk(userId);

      user.verified = true;

      await user.save();

      newOrder.setUser(user);
    }

    await Promise.all(
      order.map(async (order) => {
        OrderProduct.create({
          OrderId: newOrder.id,
          ProductId: order.id,
          quantity: order.quantity,
        });

        const product = await Product.findByPk(order.id);
        if (product) {
          product.stock = product.stock - order.quantity;

          console.log("PRODUCT", product);

          await product.save();
        }
      })
    );

    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/recension", async (req, res) => {
  const { title, description, rating, firstName, lastName, userId, productId } =
    req.body;

  try {
    const { Recension, User, Product } = getModels();

    const newRecension = await Recension.create({
      title,
      description,
      rating,
      firstName,
      lastName,
    });

    if (userId) {
      const foundUser = await User.findByPk(userId);

      if (foundUser) {
        await newRecension.setUser(foundUser);

        newRecension.verified = true;
        await newRecension.save();
      }
    }

    if (productId) {
      const founProduct = await Product.findByPk(productId);

      if (founProduct) newRecension.setProduct(founProduct);
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const { Product, ProductImage, ProductCategory, Recension } = getModels();

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

        const recensions = await Recension.findAll({
          where: { ProductId: product.id },
        });

        const categoryIds = categories.map(({ CategoryId }) => CategoryId);

        const imageUrls = images.map(({ url }) => url);

        const recensionsFormated = recensions?.map((recension) => ({
          id: recension.id,
          title: recension.title,
          description: recension.description,
          rating: recension.rating,
          firstName: recension.firstName,
          lastName: recension.lastName,
          verified: recension.verified,
        }));

        return {
          ...product.toJSON(),
          images: imageUrls,
          categories: categoryIds,
          recensions: recensionsFormated,
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
