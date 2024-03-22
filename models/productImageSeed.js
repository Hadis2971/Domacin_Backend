const data = [
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 3,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 3,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 3,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 3,
  },
];

const seedProductImages = async (dbConnection) => {
  await dbConnection.models.ProductImage.bulkCreate(data);
};

export default seedProductImages;
