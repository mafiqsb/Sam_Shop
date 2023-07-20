const data = {
  // users: [
  //   {
  //     name: 'afiq',
  //     email: 'admin@example.com',
  //     password: bcrypt.hashSync('123456'),
  //     isAdmin: true,
  //   },
  //   {
  //     name: 'Alin',
  //     email: 'user@example.com',
  //     password: bcrypt.hashSync('123456'),
  //     isAdmin: false,
  //   },
  // ],
  products: [
    {
      _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpeg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description:
        'Designed with small intricate scallop embroidery that is perfect for days when you want to inject a classic element into your wardrobe. This shawl is made from textured chiffon, a wonderful twist from the basic chiffon material. Fully embroidered on all 4 sides of the shawl, Saleha Embroidered Shawl adds an elegant classic touch to the wearer. - Material: Textured chiffon',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,

      description:
        'Designed with small intricate scallop embroidery that is perfect for days when you want to inject a classic element into your wardrobe. This shawl is made from textured chiffon, a wonderful twist from the basic chiffon material. Fully embroidered on all 4 sides of the shawl, Saleha Embroidered Shawl adds an elegant classic touch to the wearer. - Material: Textured chiffon',
    },
    {
      _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description:
        'Designed with small intricate scallop embroidery that is perfect for days when you want to inject a classic element into your wardrobe. This shawl is made from textured chiffon, a wonderful twist from the basic chiffon material. Fully embroidered on all 4 sides of the shawl, Saleha Embroidered Shawl adds an elegant classic touch to the wearer. - Material: Textured chiffon',
    },
    {
      _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description:
        'Designed with small intricate scallop embroidery that is perfect for days when you want to inject a classic element into your wardrobe. This shawl is made from textured chiffon, a wonderful twist from the basic chiffon material. Fully embroidered on all 4 sides of the shawl, Saleha Embroidered Shawl adds an elegant classic touch to the wearer. - Material: Textured chiffon',
    },
  ],
};
export default data;
