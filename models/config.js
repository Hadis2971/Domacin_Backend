import { Sequelize } from "sequelize";
import setUpUserModel from "./user";
import setUpProductModel from "./product";
import setUpCategoryModel from "./category";
import setUpCommentModel from "./comment";

import setUpProductCategoryModel from "./productCategory";
import setUpUserProductModel from "./userProduct";

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
  setUpUserModel(dbConnection);
  setUpProductModel(dbConnection);
  setUpCommentModel(dbConnection);
  setUpCategoryModel(dbConnection);

  setUpProductCategoryModel(dbConnection);
  setUpUserProductModel(dbConnection);

  await dbConnection.sync({ alter: true });
}

async function setUpDatabase(req, res, next) {
  await connectToDatabase();
  await syncModels();

  next();
}

export default setUpDatabase;
