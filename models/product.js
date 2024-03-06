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

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Product" }
  );
}

export default setUpProductModel;
