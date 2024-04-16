import { DataTypes, Model } from "sequelize";

function setUpProductCommentModel(sequelize) {
  class ProductComment extends Model {}

  ProductComment.init({}, { sequelize, modelName: "ProductComment" });
}

export default setUpProductCommentModel;
