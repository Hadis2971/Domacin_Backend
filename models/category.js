import { DataTypes, Model } from "sequelize";

function setUpCategoryModel(sequelize) {
  class Category extends Model {}

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Category" }
  );
}

export default setUpCategoryModel;
