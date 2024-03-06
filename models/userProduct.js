import { Model } from "sequelize";

function setUpUserProductModel(sequelize) {
  class UserProduct extends Model {}

  UserProduct.init({}, { sequelize, modelName: "UserProduct" });

  sequelize.models.Product.belongsToMany(sequelize.models.User, {
    through: "UserProduct",
  });
}

export default setUpUserProductModel;
