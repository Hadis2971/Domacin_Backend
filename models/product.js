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
        allowNull: false,
      },

      stock: {
        type: DataTypes.INTEGER,
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
