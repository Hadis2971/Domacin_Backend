const data = [
  {
    CategoryId: 1,
    ProductId: 1,
  },
  {
    CategoryId: 2,
    ProductId: 3,
  },
  {
    CategoryId: 2,
    ProductId: 1,
  },
  {
    CategoryId: 11,
    ProductId: 1,
  },
  {
    CategoryId: 12,
    ProductId: 3,
  },
  {
    CategoryId: 16,
    ProductId: 3,
  },
  {
    CategoryId: 16,
    ProductId: 2,
  },
  {
    CategoryId: 7,
    ProductId: 1,
  },
  {
    CategoryId: 2,
    ProductId: 2,
  },
  {
    CategoryId: 1,
    ProductId: 3,
  },
  {
    CategoryId: 13,
    ProductId: 2,
  },
  {
    CategoryId: 12,
    ProductId: 2,
  },
  {
    CategoryId: 10,
    ProductId: 3,
  },
];

const seedProductCategories = async (dbConnection) => {
  await dbConnection.models.ProductCategory.bulkCreate(data);
};

export default seedProductCategories;
