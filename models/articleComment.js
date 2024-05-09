import { DataTypes, Model } from "sequelize";

function setUpArticleCommentModel(sequelize) {
  class ArticleComment extends Model {}

  ArticleComment.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "ArticleComment" }
  );
}

export default setUpArticleCommentModel;
