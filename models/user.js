import { DataTypes, Model } from "sequelize";

function setUpUserModel(sequelize) {
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
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

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    { sequelize, modelName: "User" }
  );

  //sequelize.models.User.hasMany(sequelize.models.Order);
}

export default setUpUserModel;
