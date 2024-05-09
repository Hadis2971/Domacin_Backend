import { Model } from "sequelize";

function setUpArticleCategoryModel(sequelize) {
  class ArticleCategory extends Model {}

  ArticleCategory.init({}, { sequelize, modelName: "ArticleCategory" });

  // sequelize.models.Category.belongsToMany(sequelize.models.Product, {
  //   through: ProductCategory,
  // });
}

export default setUpArticleCategoryModel;
