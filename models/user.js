import { DataTypes, Model } from "sequelize";

function setUpUserModel(sequelize) {
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "User" }
  );
}

export default setUpUserModel;
