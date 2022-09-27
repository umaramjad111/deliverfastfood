import React from "react";
import Carts from "../components/UI/cart/Carts";
import { useSelector } from "react-redux";
export default function Cart() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <h1 className="text-center p-3">Cart Details</h1>
      <p className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod
        tenetur corrupti. In ex eos, possimus, dolor blanditiis doloribus iure
        assumenda laborum aliquid laboriosam beatae ipsam, atque saepe earum
        sequi.
      </p>
      <p className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod
        tenetur corrupti. In ex eos, possimus, dolor blanditiis doloribus iure
        assumenda laborum aliquid laboriosam beatae ipsam, atque saepe earum
        sequi.
      </p>
      <p className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod
        tenetur corrupti. In ex eos, possimus, dolor blanditiis doloribus iure
        assumenda laborum aliquid laboriosam beatae ipsam, atque saepe earum
        sequi.
      </p>
      <p className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod
        tenetur corrupti. In ex eos, possimus, dolor blanditiis doloribus iure
        assumenda laborum aliquid laboriosam beatae ipsam, atque saepe earum
        sequi.
      </p>
      <p className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod
        tenetur corrupti. In ex eos, possimus, dolor blanditiis doloribus iure
        assumenda laborum aliquid laboriosam beatae ipsam, atque saepe earum
        sequi.
      </p>

      {showCart && <Carts />}
    </div>
  );
}
