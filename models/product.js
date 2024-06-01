import { DataTypes, Model } from "sequelize";

function setUpProductModel(sequelize) {
  class Product extends Model {}

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.FLOAT,
      },

      stock: {
        type: DataTypes.INTEGER,
      },

      skuCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      shortDescription: {
        type: DataTypes.TEXT,
      },

      longDescription: {
        type: DataTypes.TEXT,
      },
    },
    { sequelize, modelName: "Product" }
  );
}

export default setUpProductModel;
