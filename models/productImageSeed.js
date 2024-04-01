const data = [
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ProductId: 1,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 2,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg?fmt=webp&w=500",
    ProductId: 2,
  },
  {
    url: "https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg",
    ProductId: 3,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg?fmt=webp&w=500",
    ProductId: 3,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
    ProductId: 2,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg?fmt=webp&w=500",
    ProductId: 2,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ProductId: 3,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ProductId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ProductId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&w=500",
    ProductId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    ProductId: 1,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&w=500",
    ProductId: 2,
  },
  {
    url: "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
    ProductId: 3,
  },
];

const seedProductImages = async (dbConnection) => {
  await dbConnection.models.ProductImage.bulkCreate(data);
};

export default seedProductImages;
