import { DataTypes, Model } from "sequelize";

function setUpArticleModel(sequelize) {
  class Article extends Model {}

  Article.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Article" }
  );

  // sequelize.models.Order.belongsTo(sequelize.models.User);
}

export default setUpArticleModel;
