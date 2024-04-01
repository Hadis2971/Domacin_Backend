import { DataTypes, Model } from "sequelize";

function setUpCategoryModel(sequelize) {
  class Category extends Model {}

  Category.init(
    {
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Category" }
  );
}

export default setUpCategoryModel;
