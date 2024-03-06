import { DataTypes, Model } from "sequelize";

function setUpCommentModel(sequelize) {
  class Comment extends Model {}

  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userID: {
        type: DataTypes.INTEGER,
      },

      email: {
        type: DataTypes.INTEGER,
      },
    },

    { sequelize, modelName: "Comment" }
  );
}

export default setUpCommentModel;
