import { PRODUCT_ATTRIBUTE } from "./productAttribute";

const data = [
  {
    type: PRODUCT_ATTRIBUTE.KOLICINA,
  },
  {
    type: PRODUCT_ATTRIBUTE.VELICINA,
  },
  {
    type: PRODUCT_ATTRIBUTE.PAKOVANJE,
  },
];

const seedProductAttribute = async (dbConnection) => {
  await dbConnection.models.ProductAttribute.bulkCreate(data);
};

export default seedProductAttribute;
