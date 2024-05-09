const data = [
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ArticleId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ArticleId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ArticleId: 3,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg?fmt=webp&w=500",
    ArticleId: 4,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ArticleId: 5,
  },
];

const seedArticleImages = async (dbConnection) => {
  await dbConnection.models.ArticleImage.bulkCreate(data);
};

export default seedArticleImages;
