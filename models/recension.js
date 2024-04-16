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

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { sequelize, modelName: "Recension" }
  );
}

export default setUpRecensionModel;
