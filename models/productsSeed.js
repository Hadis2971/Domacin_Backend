const data = [
  {
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
      urna risus, a placerat mauris venenatis non. Pellentesque dapibus,
      massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in.`,
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
      urna risus, a placerat mauris venenatis non. Pellentesque dapibus,
      massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in. Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.`,
    name: "Cookies",
    stock: 0,
    skuCode: "SKU-Product 1 9qOIzzJd7s6CQddVZTggSB1ZedFORS",
    ProductAttributeId: 1,
  },
  {
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce temporurna risus, a placerat mauris venenatis non. Pellentesque dapibus,massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in.`,
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
      urna risus, a placerat mauris venenatis non. Pellentesque dapibus,
      massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in. Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.`,
    name: "Cookies 2",
    stock: 2,
    skuCode: "SKU-Product 2 mEs6xiKozHHBBxRPW6zcmLPsQSodxv",
    price: 1.99,
  },
  {
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
      urna risus, a placerat mauris venenatis non. Pellentesque dapibus,
      massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in.`,
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
      urna risus, a placerat mauris venenatis non. Pellentesque dapibus,
      massa vitae semper tincidunt, felis libero eleifend diam, ac rutrum
      tellus enim eget mi. Aenean cursus efficitur eros, quis vestibulum
      ligula suscipit in. Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.Nam laoreet odio mi, nec porta mauris rhoncus eu.
      Proin eget iaculis leo. Nulla mi ligula, vulputate vitae gravida nec,
      placerat sed lorem. Pellentesque cursus ornare nisl, in suscipit mi
      faucibus eu. Duis lacinia nunc ac est placerat, eu posuere sapien
      bibendum. Curabitur rutrum odio et ante pretium lacinia. Suspendisse
      risus ante, ultrices eu ex eu, mattis rutrum leo. Vestibulum rhoncus
      semper est a mattis. Duis eleifend sollicitudin ex, ac euismod est.`,
    name: "Cookies",
    stock: 13,
    skuCode: "SKU-Product 3 XKfybMEUbwmg9k80SCSSxZJ9jo0C3GJ9XxfqGpej",
    price: 7.99,
  },
];

const seedProducts = async (dbConnection) => {
  await dbConnection.models.Product.bulkCreate(data);
};

export default seedProducts;
