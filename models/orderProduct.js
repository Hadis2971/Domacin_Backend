import { DataTypes, Model } from "sequelize";

function setUpOrderProductModel(sequelize) {
  class OrderProduct extends Model {}

  OrderProduct.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      attribute: {
        type: DataTypes.INTEGER,
      },
      variation: {
        type: DataTypes.INTEGER,
      },
      productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, modelName: "OrderProduct" }
  );

  // sequelize.models.Order.belongsToMany(sequelize.models.Product, {
  //   through: "OrderProduct",
  // });

  // sequelize.models.Product.belongsToMany(sequelize.models.Order, {
  //   through: "OrderProduct",
  // });
}

export default setUpOrderProductModel;
