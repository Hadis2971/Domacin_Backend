import { DataTypes, Model } from "sequelize";

function setUpOrderModel(sequelize) {
  class Order extends Model {}

  Order.init(
    {
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Order" }
  );

  // sequelize.models.Order.belongsTo(sequelize.models.User);
}

export default setUpOrderModel;
