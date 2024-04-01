const data = [
  {
    type: 1,
  },
  {
    type: 2,
  },
  {
    type: 3,
  },
  {
    type: 4,
  },
  {
    type: 5,
  },
  {
    type: 6,
  },
  {
    type: 7,
  },
  {
    type: 8,
  },
  {
    type: 9,
  },
  {
    type: 10,
  },
  {
    type: 11,
  },
  {
    type: 12,
  },
  {
    type: 13,
  },
  {
    type: 14,
  },
  {
    type: 15,
  },
  {
    type: 16,
  },
];

const seedCategories = async (dbConnection) => {
  await dbConnection.models.Category.bulkCreate(data);
};

export default seedCategories;
