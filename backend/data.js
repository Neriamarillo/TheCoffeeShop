const data = {
  users: [
    {
      username: "johndoe",
      password: "janedoe",
    },
  ],
  products: [
    db.products.insertOne(
      {
        "type" : "coffee-brewer",
        "name" : "X60",
        "brand" : "Vario",
        "price" : 25.5,
        "description" :
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image" : "/images/v60.jpg",
        "stock" : 10,
        "rating" : 3.5,
      }
    )
    {
      id: "1",
      type: "kettle",
      name: "Buenavita Electric Kettle",
      brand: "Buenavita",
      price: 57.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/bona-kettle.jpg",
      stock: 4,
      rating: 4.5,
    },
    {
      id: "2",
      type: "coffee-brewer",
      name: "X60",
      brand: "Vario",
      price: 25.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/v60.jpg",
      stock: 10,
      rating: 3.5,
    },
    {
      id: "3",
      type: "coffee-brewer",
      name: "Airpress Brewer",
      brand: "Airpress",
      price: 24.98,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/aero.jpg",
      stock: 1,
      rating: 4,
    },
    {
      id: "4",
      type: "coffee-brewer",
      name: "X60",
      brand: "Vario",
      price: 25.75,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/v60.jpg",
      stock: 5,
      rating: 2.8,
    },
    {
      id: "5",
      type: "kettle",
      name: "Buenavita Electric Kettle",
      brand: "Buenavita",
      price: 57.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/bona-kettle.jpg",
      stock: 0,
      rating: 1,
    },
    {
      id: "6",
      type: "coffee-brewer",
      name: "Airpress Brewer",
      brand: "Airpress",
      price: 24.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/aero.jpg",
      stock: 1,
    },
  ],
};

export default data;
