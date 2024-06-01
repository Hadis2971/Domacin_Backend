import { DataTypes, Model } from "sequelize";

export const PRODUCT_ATTRIBUTE = {
  KOLICINA: 1,
  VELICINA: 2,
  PAKOVANJE: 3,
};

function setUpProductAttributeModel(sequelize) {
  class ProductAttribute extends Model {}

  ProductAttribute.init(
    {
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, modelName: "ProductAttribute" }
  );
}

export default setUpProductAttributeModel;
