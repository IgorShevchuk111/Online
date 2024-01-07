const data = [
  {
    id: 1,
    type: "SmartPhones",
    brands: [
      {
        id: "s",
        brand: "Samsung",
        models: [
          {
            id: "s1",
            model: "Galaxy A20",
            price: 100,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "13 Megapixels",
            screen: "6",
            img: "https://picsum.photos/200/300",
          },
          {
            id: "s2",
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
        id: "a",
        brand: "Apple",
        models: [
          {
            id: "a1",
            model: "iPhone-13",
            price: 400,
            color: ["White", "Black", "Red", "Green", "Blue"],
            storage: "32gb",
            camera: "13 Megapixels",
            screen: "6",
            img: "https://picsum.photos/200/300",
          },
          {
            id: "a2",
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
    id: 2,
    type: "Laptops",
    brands: [
      {
        id: "l",
        brand: "Lenovo",
        models: [
          {
            id: "l1",
            model: "Lenovo-1",
            price: 500,
            color: ["White", "Black"],
            storage: "200gb",
            size: "15",
            img: "https://picsum.photos/200/300",
          },
          {
            id: "l2",
            model: "Lenovo-2",
            price: 550,
            color: ["White", "Black"],
            storage: "300gb",
            size: "17",
            img: "https://picsum.photos/200/300",
          },
        ],
      },
      {
        id: "ap",
        brand: "Apple",
        models: [
          {
            id: "ap1",
            model: "MacBook",
            price: 1000,
            color: ["White", "Black"],
            storage: "500gb",
            size: "15",
            img: "https://picsum.photos/200/300",
          },
          {
            id: "ap2",
            model: "MacBook Pro",
            price: 1550,
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
