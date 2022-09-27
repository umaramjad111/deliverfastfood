import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link, Navigate, useParams } from "react-router-dom";
import "../../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartUiActions } from "../../../store/shopping-cart/cartUISlice";
import { cart, home, foods } from "../../../routes/routepath";
export default function Carts() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const togglecart = () => {
    dispatch(cartUiActions.toggle());
  };

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={togglecart}>
            {" "}
            <i class="ri-close-line"></i>
          </span>
        </div>
        <div className="cart__item__list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No Item added to the cart</h6>
          ) : (
            cartProducts.map((item, i) => <CartItem item={item} key={i} />)
          )}
        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>{" "}
          </h6>
          <button>
            {" "}
            <Link to="/checkout">Checkout</Link>{" "}
          </button>
        </div>
      </ListGroup>
    </div>
  );
}
