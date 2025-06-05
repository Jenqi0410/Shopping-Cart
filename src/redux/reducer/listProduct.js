const initialState = [
  {
    id: 1,
    name: "Pizza",
    price: 12,
    image: "https://picsum.photos/100?random=1", 
    description: "Delicious pizza with toppings"
  },
  {
    id: 2,
    name: "Hamburger",
    price: 10,
    image: "https://picsum.photos/100?random=2",
    description: "Juicy beef hamburger"
  },
  {
    id: 3,
    name: "Bread",
    price: 8,
    image: "https://picsum.photos/100?random=3",
    description: "Freshly baked bread"
  },
  {
    id: 4,
    name: "Cake",
    price: 15,
    image: "https://picsum.photos/100?random=4",
    description: "Sweet and soft cake"
  }
];


const listProduct = (state = initialState, action) => {
  return state;
};

export default listProduct;
