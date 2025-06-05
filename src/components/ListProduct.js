import React from "react";
import Product from "./Product";

// Dữ liệu mẫu sản phẩm (có thể lấy từ API sau này)
const products = [
  {
    id: 1,
    name: "Pizza",
    price: 12,
    description: "A delicious pizza loaded with your favorite toppings. Perfectly baked with a crispy crust, topped with fresh ingredients and melted cheese.",
    image: "./images/pizza.jpg",
  },
  {
    id: 2,
    name: "Hamburger",
    price: 16,
    description: "A juicy beef patty with fresh lettuce, tomatoes, and your choice of cheese, all nestled between a soft, toasted bun.",
    image: "./images/Hamburger.jpg",
  },
  {
    id: 3,
    name: "Bread",
    price: 13,
    description: "Soft and fluffy, freshly baked bread, perfect for any meal or as a delicious snack on its own.",
    image: "./images/bread.jpg",
  },
  {
    id: 4,
    name: "Cake",
    price: 14,
    description: "A moist, fluffy cake with a rich flavor, perfect for satisfying your sweet tooth. Ideal for special occasions or everyday indulgence.",
    image: "./images/Cake.jpg",
  },
];

export default function ListProduct() {
  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
