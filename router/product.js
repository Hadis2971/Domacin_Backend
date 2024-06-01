import express from "express";
import { Op } from "sequelize";

import wss from "..";
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
  //{ userId: 1, order: [ { id: 1, quantity: 1, attribute, price, variationID } ] }
  const { userId, firstName, lastName, address, email, order } = req.body;

  console.log(
    "-----------------------------------------------------------------------------------------------------------"
  );

  console.log(order);

  console.log(
    "-----------------------------------------------------------------------------------------------------------"
  );

  const { Order, User, Product, ProductAttributeVariation, OrderProduct } =
    getModels();

  const responseOrder = [];

  if (!order.length) {
    res.status(400).json({ message: "Narudzba ne moze biti prazna!!!" });

    return;
  }

  try {
    await Promise.all(
      order.map(async (order) => {
        const product = await Product.findByPk(order.id);

        const variation = await ProductAttributeVariation.findByPk(
          order.variationID
        );

        const stock = product.stock || variation.stock;

        if (stock < order.quantity)
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
          orderID: newOrder.id,
          productID: order.id,
          quantity: order.quantity,
          price: order.price,
          attribute: order.attribute,
          variation: order.variationID,
        });

        const product = await Product.findByPk(order.id);

        const variation = await ProductAttributeVariation.findByPk(
          order.variationID
        );

        if (product) {
          const stock = product.stock || variation.stock;

          responseOrder.push({
            id: product.id,
            variationID: order.variationID,
            productName: product.name,
            initialStock: stock,
            currentStock: stock - order.quantity,
          });

          if (product.stock) {
            product.stock = product.stock - order.quantity;

            await product.save();
          } else if (variation.stock) {
            variation.stock = variation.stock - order.quantity;

            await variation.save();
          }
        }
      })
    );

    wss.clients.forEach((client) => {
      client.send(JSON.stringify(responseOrder));
    });

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

router.get("/:category", async (req, res) => {
  const {
    Product,
    ProductImage,
    ProductCategory,
    ProductAttribute,
    ProductAttributeVariation,
    Recension,
  } = getModels();

  try {
    const { category } = req.params;

    const productCategories = await ProductCategory.findAll({
      where: { CategoryId: category },
    });

    const productIdsList = productCategories.map(({ ProductId }) => ({
      id: ProductId,
    }));

    const products = await Product.findAll({
      where: { [Op.or]: productIdsList },
    });

    const response = await Promise.all(
      products.map(async (product) => {
        const images = await ProductImage.findAll({
          where: { ProductId: product.id },
        });

        const attribute = await ProductAttribute.findByPk({
          where: { id: product.ProductAttributeId },
        });

        const variations = await ProductAttributeVariation.findAll({
          where: { ProductAttributeId: attribute.id },
        });

        const recensions = await Recension.findAll({
          where: { ProductId: product.id },
        });

        const categoryIds = productCategories.map(
          ({ CategoryId }) => CategoryId
        );

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
          attribute: { name: attribute.name, variations },
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const {
    Product,
    ProductImage,
    ProductCategory,
    ProductAttribute,
    ProductAttributeVariation,
    Recension,
  } = getModels();

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

        console.log(
          "-----------------------------------------------------------------------------------------------------------"
        );
        console.log("product.ProductAttributeId", product.ProductAttributeId);
        console.log(
          "-----------------------------------------------------------------------------------------------------------"
        );

        const attribute = await ProductAttribute.findByPk(
          product.ProductAttributeId
        );

        console.log(
          "-----------------------------------------------------------------------------------------------------------"
        );
        console.log("attribute", attribute);
        console.log(
          "-----------------------------------------------------------------------------------------------------------"
        );

        const variations = attribute
          ? await ProductAttributeVariation.findAll({
              where: { ProductAttributeId: attribute.id },
            })
          : null;

        const responseVariations = variations?.map(
          ({ id, name, stock, price }) => ({
            id,
            name,
            stock,
            price,
            productID: product.id,
            variationID: id,
            attribute: attribute?.type,
          })
        );

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
          attribute: {
            type: attribute?.type || null,
            variations: responseVariations || null,
          },
        };
      })
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
