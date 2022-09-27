import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "reactstrap";

import logo from "../../images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

import { cartUiActions } from "../../store/shopping-cart/cartUISlice";
import "../../../styles/header.css";
export default function Header() {

  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const togglecart = () => {
    dispatch(cartUiActions.toggle());
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });
  //   return () => window.removeEventListener("scroll");
  // }, []);

  const toggleRef = () => menuRef.current.classList.toggle("show__menu");

  const nav__links = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="header">
      <Container>
        <div
          className="nav__wrapper d-flex align-items-center 
        justify-content-between"
        >
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, i) => (
                <NavLink
                  onClick={toggleRef}
                  to={item.path}
                  key={i}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display === "Cart" ? (
                    <p onClick={togglecart} className="mb-0">
                      {item.display}
                    </p>
                  ) : (
                    <p className="mb-0">{item.display}</p>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={togglecart}>
              <i class="ri-shopping-cart-2-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-3-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleRef}>
              <i class="ri-menu-2-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
