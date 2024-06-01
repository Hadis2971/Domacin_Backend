import { Sequelize } from "sequelize";
import setUpUserModel from "./user";
import setUpProductModel from "./product";
import setUpProductImageModel from "./productImage";
import setUpOrderModel from "./order";
import setUpCategoryModel from "./category";
import setUpRecensionModel from "./recension";
import setUpArticleModel from "./article";

import setUpProductCategoryModel from "./productCategory";
import setUpOrderProductModel from "./orderProduct";
import setUpProductAttributeModel from "./productAttribute";
import setUpProductAttributeVariationModel from "./productAttributeVariation";
import setUpArticleCommentModel from "./articleComment";
import setUpArticleCategoryModel from "./articleCategory";
import setUpArticleImageModel from "./articleImage";

import seedCategories from "./categorySeed";
import seedProducts from "./productsSeed";
import seedProductAttribute from "./productAttributeSeed";
import seedProductAttributeVariation from "./productAttributeVariationSeed";
import seedAricles from "./articlesSeed";
import seedProductImages from "./productImageSeed";
import seedProductCategories from "./productCategoriesSeed";
import seedArticleCategories from "./articleCategoriesSeed";
import seedArticleImages from "./articleImagesSeed";

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
  setUpProductAttributeModel(dbConnection);
  setUpProductAttributeVariationModel(dbConnection);
  setUpProductModel(dbConnection);
  setUpArticleModel(dbConnection);
  setUpProductImageModel(dbConnection);
  setUpRecensionModel(dbConnection);
  setUpProductCategoryModel(dbConnection);
  setUpOrderProductModel(dbConnection);
  setUpArticleCommentModel(dbConnection);
  setUpArticleCategoryModel(dbConnection);
  setUpArticleImageModel(dbConnection);

  dbConnection.models.User.hasMany(dbConnection.models.Order);
  dbConnection.models.Order.belongsTo(dbConnection.models.User);
  dbConnection.models.ProductImage.belongsTo(dbConnection.models.Product);

  // dbConnection.models.Order.belongsToMany(dbConnection.models.Product, {
  //   through: "OrderProduct",
  // });

  // dbConnection.models.Product.belongsToMany(dbConnection.models.Order, {
  //   through: "OrderProduct",
  // });

  dbConnection.models.Category.belongsToMany(dbConnection.models.Product, {
    through: "ProductCategory",
  });

  dbConnection.models.Product.belongsToMany(dbConnection.models.Category, {
    through: "ProductCategory",
  });

  dbConnection.models.ProductAttribute.hasMany(dbConnection.models.Product);

  dbConnection.models.ProductAttribute.hasMany(
    dbConnection.models.ProductAttributeVariation
  );

  dbConnection.models.Recension.belongsTo(dbConnection.models.User);

  dbConnection.models.Recension.belongsTo(dbConnection.models.Product);

  dbConnection.models.Article.hasMany(dbConnection.models.ArticleComment);

  dbConnection.models.ArticleComment.belongsTo(dbConnection.models.Article);

  dbConnection.models.ArticleImage.belongsTo(dbConnection.models.Article);

  dbConnection.models.ArticleComment.belongsTo(dbConnection.models.User);

  dbConnection.models.Category.belongsToMany(dbConnection.models.Article, {
    through: "ArticleCategory",
  });

  dbConnection.models.Article.belongsToMany(dbConnection.models.Category, {
    through: "ArticleCategory",
  });

  await dbConnection.sync({ alter: true });

  // await seedProductAttribute(dbConnection);
  // await seedProductAttributeVariation(dbConnection);
  // await seedProducts(dbConnection);
  // await seedProductImages(dbConnection);
  // await seedCategories(dbConnection);
  // await seedProductCategories(dbConnection);
  // await seedAricles(dbConnection);
  // await seedArticleCategories(dbConnection);
  // await seedArticleImages(dbConnection);
}

async function setUpDatabase() {
  await connectToDatabase();
  await syncModels();
}

export function getModels() {
  const {
    User,
    Product,
    ProductAttribute,
    ProductAttributeVariation,
    ProductImage,
    Order,
    Recension,
    Article,
    ArticleComment,
    ArticleCategory,
    ArticleImage,
    Category,
    ProductCategory,
    OrderProduct,
  } = dbConnection.models;

  return {
    User,
    Product,
    ProductAttribute,
    ProductAttributeVariation,
    ProductImage,
    Order,
    Recension,
    Article,
    ArticleComment,
    ArticleCategory,
    ArticleImage,
    Category,
    ProductCategory,
    OrderProduct,
  };
}

export default setUpDatabase;
