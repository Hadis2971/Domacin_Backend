import { DataTypes, Model } from "sequelize";

function setUpRecensionModel(sequelize) {
  class Comment extends Model {}

  Comment.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      rating: {
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

      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },

    { sequelize, modelName: "Recension" }
  );
}

export default setUpRecensionModel;
