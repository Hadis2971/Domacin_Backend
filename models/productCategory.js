import { Model } from "sequelize";

function setUpProductCategoryModel(sequelize) {
  class ProductCategory extends Model {}

  ProductCategory.init({}, { sequelize, modelName: "ProductCategory" });
}

export default setUpProductCategoryModel;
