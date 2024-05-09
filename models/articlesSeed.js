const data = [
  {
    firstName: "Suzzy",

    lastName: "Boyle",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla a eros finibus porta.",

    description:
      "Mauris eget dui et ante molestie congue. Morbi semper egestas lacus, in lobortis lectus eleifend eu. Nunc molestie mi vitae dignissim accumsan. Quisque et massa eu eros convallis iaculis hendrerit ut quam. Nunc lectus ex, rutrum in risus a, varius cursus dui. Duis mauris eros, sollicitudin nec dapibus sit amet, tempus vitae orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus lobortis nisl ac quam hendrerit tempus. Proin eget arcu id tortor condimentum pretium eu nec nibh. Fusce diam nisi, accumsan nec nisi vel, tincidunt condimentum tortor. Mauris nec magna eu nunc dictum imperdiet. Mauris dapibus placerat lacus, posuere mollis lorem fermentum sit amet. ",
  },
  {
    firstName: "Jane",

    lastName: "Brian",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla a eros finibus porta.",

    description:
      "Mauris eget dui et ante molestie congue. Morbi semper egestas lacus, in lobortis lectus eleifend eu. Nunc molestie mi vitae dignissim accumsan. Quisque et massa eu eros convallis iaculis hendrerit ut quam. Nunc lectus ex, rutrum in risus a, varius cursus dui. Duis mauris eros, sollicitudin nec dapibus sit amet, tempus vitae orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus lobortis nisl ac quam hendrerit tempus. Proin eget arcu id tortor condimentum pretium eu nec nibh. Fusce diam nisi, accumsan nec nisi vel, tincidunt condimentum tortor. Mauris nec magna eu nunc dictum imperdiet. Mauris dapibus placerat lacus, posuere mollis lorem fermentum sit amet. ",
  },
  {
    firstName: "Suzzy",

    lastName: "Boyle",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla a eros finibus porta.",

    description:
      "Mauris eget dui et ante molestie congue. Morbi semper egestas lacus, in lobortis lectus eleifend eu. Nunc molestie mi vitae dignissim accumsan. Quisque et massa eu eros convallis iaculis hendrerit ut quam. Nunc lectus ex, rutrum in risus a, varius cursus dui. Duis mauris eros, sollicitudin nec dapibus sit amet, tempus vitae orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus lobortis nisl ac quam hendrerit tempus. Proin eget arcu id tortor condimentum pretium eu nec nibh. Fusce diam nisi, accumsan nec nisi vel, tincidunt condimentum tortor. Mauris nec magna eu nunc dictum imperdiet. Mauris dapibus placerat lacus, posuere mollis lorem fermentum sit amet. ",
  },
  {
    firstName: "Jane",

    lastName: "Brian",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla a eros finibus porta.",

    description:
      "Mauris eget dui et ante molestie congue. Morbi semper egestas lacus, in lobortis lectus eleifend eu. Nunc molestie mi vitae dignissim accumsan. Quisque et massa eu eros convallis iaculis hendrerit ut quam. Nunc lectus ex, rutrum in risus a, varius cursus dui. Duis mauris eros, sollicitudin nec dapibus sit amet, tempus vitae orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus lobortis nisl ac quam hendrerit tempus. Proin eget arcu id tortor condimentum pretium eu nec nibh. Fusce diam nisi, accumsan nec nisi vel, tincidunt condimentum tortor. Mauris nec magna eu nunc dictum imperdiet. Mauris dapibus placerat lacus, posuere mollis lorem fermentum sit amet. ",
  },
  {
    firstName: "Lin",

    lastName: "Mayer",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla a eros finibus porta.",

    description:
      "Mauris eget dui et ante molestie congue. Morbi semper egestas lacus, in lobortis lectus eleifend eu. Nunc molestie mi vitae dignissim accumsan. Quisque et massa eu eros convallis iaculis hendrerit ut quam. Nunc lectus ex, rutrum in risus a, varius cursus dui. Duis mauris eros, sollicitudin nec dapibus sit amet, tempus vitae orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus lobortis nisl ac quam hendrerit tempus. Proin eget arcu id tortor condimentum pretium eu nec nibh. Fusce diam nisi, accumsan nec nisi vel, tincidunt condimentum tortor. Mauris nec magna eu nunc dictum imperdiet. Mauris dapibus placerat lacus, posuere mollis lorem fermentum sit amet. ",
  },
];

const seedAricles = async (dbConnection) => {
  await dbConnection.models.Article.bulkCreate(data);
};

export default seedAricles;
