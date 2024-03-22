import { Model } from "sequelize";

function setUpProductCategoryModel(sequelize) {
  class ProductCategory extends Model {}

  ProductCategory.init({}, { sequelize, modelName: "ProductCategory" });

  // sequelize.models.Category.belongsToMany(sequelize.models.Product, {
  //   through: ProductCategory,
  // });
}

export default setUpProductCategoryModel;
