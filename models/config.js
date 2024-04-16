import { Sequelize } from "sequelize";
import setUpUserModel from "./user";
import setUpProductModel from "./product";
import setUpProductImageModel from "./productImage";
import setUpOrderModel from "./order";
import setUpCategoryModel from "./category";
import setUpRecensionModel from "./recension";

import setUpProductCategoryModel from "./productCategory";
import setUpOrderProductModel from "./orderProduct";

import seedCategories from "./categorySeed";
import seedProducts from "./productsSeed";
import seedProductImages from "./productImageSeed";
import seedProductCategories from "./productCategoriesSeed";

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
  setUpCategoryModel(dbConnection);
  setUpProductModel(dbConnection);
  setUpProductImageModel(dbConnection);
  setUpRecensionModel(dbConnection);

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

  dbConnection.models.Product.belongsToMany(dbConnection.models.Category, {
    through: "ProductCategory",
  });

  dbConnection.models.Recension.belongsTo(dbConnection.models.User);

  dbConnection.models.Recension.belongsTo(dbConnection.models.Product);

  await dbConnection.sync({ alter: true });

  // await seedProducts(dbConnection);
  // await seedProductImages(dbConnection);
  // await seedCategories(dbConnection);
  // await seedProductCategories(dbConnection);
}

async function setUpDatabase() {
  await connectToDatabase();
  await syncModels();
}

export function getModels() {
  const {
    User,
    Product,
    ProductImage,
    Order,
    Recension,
    Category,
    ProductCategory,
    OrderProduct,
  } = dbConnection.models;

  return {
    User,
    Product,
    ProductImage,
    Order,
    Recension,
    Category,
    ProductCategory,
    OrderProduct,
  };
}

export default setUpDatabase;
