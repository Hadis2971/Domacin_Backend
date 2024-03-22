import { Sequelize } from "sequelize";
import setUpUserModel from "./user";
import setUpProductModel from "./product";
import setUpProductImageModel from "./productImage";
import setUpOrderModel from "./order";
import setUpCategoryModel from "./category";
import setUpCommentModel from "./comment";

import setUpProductCategoryModel from "./productCategory";
import setUpOrderProductModel from "./orderProduct";

import seedProducts from "./productsSeed";
import seedProductImages from "./productImageSeed";

const dbConnection = new Sequelize("Domacin", "userdomacin", "Password1!", {
  host: "localhost",
  dialect: "mysql",
});

async function connectToDatabase() {
  try {
    await dbConnection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function syncModels() {
  setUpOrderModel(dbConnection);
  setUpUserModel(dbConnection);
  setUpProductModel(dbConnection);
  setUpProductImageModel(dbConnection);
  setUpCommentModel(dbConnection);
  setUpCategoryModel(dbConnection);

  setUpProductCategoryModel(dbConnection);
  setUpOrderProductModel(dbConnection);

  dbConnection.models.User.hasMany(dbConnection.models.Order);
  dbConnection.models.Order.belongsTo(dbConnection.models.User);
  dbConnection.models.ProductImage.belongsTo(dbConnection.models.Product);
  //dbConnection.models.Product.hasMany(dbConnection.models.ProductImage);

  dbConnection.models.Order.belongsToMany(dbConnection.models.Product, {
    through: "OrderProduct",
  });

  // dbConnection.models.Product.belongsToMany(dbConnection.models.Order, {
  //   through: "OrderProduct",
  // });

  dbConnection.models.Category.belongsToMany(dbConnection.models.Product, {
    through: "ProductCategory",
  });

  await dbConnection.sync({ alter: true });

  //await seedProducts(dbConnection);
  //await seedProductImages(dbConnection);
}

async function setUpDatabase(req, res, next) {
  await connectToDatabase();
  await syncModels();

  next();
}

export function getModels() {
  const {
    User,
    Product,
    ProductImage,
    Order,
    Comment,
    Category,
    ProductCategory,
    OrderProduct,
  } = dbConnection.models;

  return {
    User,
    Product,
    ProductImage,
    Order,
    Comment,
    Category,
    ProductCategory,
    OrderProduct,
  };
}

export default setUpDatabase;
