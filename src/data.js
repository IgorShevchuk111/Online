const data = [
  {
    id: 1,
    type: "SmartPhones",
    brands: [
      {
        id: 1,
        brand: "Samsung",
        models: [
          {
            id: 1,
            model: "Galaxy A20",
            price: 100,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "13 Megapixels",
            screen: "6",
            img: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            model: "A30",
            price: 150,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "13 Megapixels",
            screen: "6.5",
            img: "https://picsum.photos/200/300",
          },
        ],
      },
      {
        id: 2,
        brand: "Apple",
        models: [
          {
            id: 1,
            model: "iPhone-13",
            price: 400,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "13 Megapixels",
            screen: "6",
            img: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            model: "iPhone-14",
            price: 450,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "24 Megapixels",
            screen: "7",
            img: "https://picsum.photos/200/300",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    type: "Laptops",
    brands: [
      {
        id: 1,
        brand: "Lenovo",
        models: [
          {
            id: 1,
            model: "Lenovo-1",
            price: "500£",
            color: ["White", "Black"],
            storage: "200gb",
            size: "15",
            img: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            model: "Lenovo-2",
            price: "550£",
            color: ["White", "Black"],
            storage: "300gb",
            size: "17",
            img: "https://picsum.photos/200/300",
          },
        ],
      },
      {
        id: 1,
        brand: "Apple",
        models: [
          {
            id: 1,
            model: "MacBook",
            price: "1000£",
            color: ["White", "Black"],
            storage: "500gb",
            size: "15",
            img: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            model: "MacBook Pro",
            price: "1550£",
            color: ["White", "Black"],
            storage: "1000gb",
            size: "17",
            img: "https://picsum.photos/200/300",
          },
        ],
      },
    ],
  },
];

export { data };
