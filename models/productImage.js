import { DataTypes, Model } from "sequelize";

function setUpProductImageModel(sequelize) {
  class ProductImage extends Model {}

  ProductImage.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "ProductImage" }
  );
}

export default setUpProductImageModel;
