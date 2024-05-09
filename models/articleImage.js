import { DataTypes, Model } from "sequelize";

function setUpArticleImageModel(sequelize) {
  class ArticleImage extends Model {}

  ArticleImage.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "ArticleImage" }
  );
}

export default setUpArticleImageModel;
