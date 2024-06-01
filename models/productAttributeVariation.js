import { DataTypes, Model } from "sequelize";

function setUpProductAttributeVariationModel(sequelize) {
  class ProductAttributeVariation extends Model {}

  ProductAttributeVariation.init(
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
    },
    { sequelize, modelName: "ProductAttributeVariation" }
  );
}

export default setUpProductAttributeVariationModel;
