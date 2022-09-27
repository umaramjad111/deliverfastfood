import React from "react";
import { Link } from "react-router-dom";

// import productImg from "../../../images/product_2.1.jpg";
import "../../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
export default function ProductCard(props) {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    alert(`${title} added to your cart`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scroltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="product__item">
      <div className="product_img">
        <img src={image01} alt="product_img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          {" "}
          <Link to={`/foods/${id}`} onClick={scroltotop}>
            {title}
          </Link>{" "}
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="add__to__cart__btn" onClick={addtocart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
