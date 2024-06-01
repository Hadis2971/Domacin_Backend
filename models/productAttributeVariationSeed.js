const data = [
  {
    name: "1kg",
    price: 12.99,
    stock: 11,
    ProductAttributeId: 1,
  },
  {
    name: "2kg",
    price: 22.99,
    stock: 10,
    ProductAttributeId: 1,
  },
  {
    name: "3kg",
    price: 32.99,
    stock: 9,
    ProductAttributeId: 1,
  },
];

const seedProductAttributeVariation = async (dbConnection) => {
  await dbConnection.models.ProductAttributeVariation.bulkCreate(data);
};

export default seedProductAttributeVariation;
