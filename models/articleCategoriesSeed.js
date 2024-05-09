const data = [
  {
    CategoryId: 1,
    ArticleId: 1,
  },
  {
    CategoryId: 2,
    ArticleId: 5,
  },
  {
    CategoryId: 2,
    ArticleId: 1,
  },
  {
    CategoryId: 11,
    ArticleId: 1,
  },
  {
    CategoryId: 12,
    ArticleId: 5,
  },
  {
    CategoryId: 16,
    ArticleId: 3,
  },
  {
    CategoryId: 16,
    ArticleId: 2,
  },
  {
    CategoryId: 7,
    ArticleId: 1,
  },
  {
    CategoryId: 2,
    ArticleId: 2,
  },
  {
    CategoryId: 1,
    ArticleId: 4,
  },
  {
    CategoryId: 13,
    ArticleId: 2,
  },
  {
    CategoryId: 12,
    ArticleId: 4,
  },
  {
    CategoryId: 10,
    ArticleId: 3,
  },
  {
    CategoryId: 10,
    ArticleId: 5,
  },
  {
    CategoryId: 10,
    ArticleId: 4,
  },
];

const seedArticleCategories = async (dbConnection) => {
  await dbConnection.models.ArticleCategory.bulkCreate(data);
};

export default seedArticleCategories;
