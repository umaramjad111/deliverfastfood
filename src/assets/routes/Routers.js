import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Allfoods from "../pages/Allfoods";
import Fooddetail from "../pages/Fooddetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {
  home,
  foods,
  fooddetail,
  cart,
  checkout,
  login,
  signup,
  contact,
} from "./routepath";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path={home} element={<Home />} />
      <Route path={foods} element={<Allfoods />} />
      <Route path={fooddetail} element={<Fooddetail />} />
      <Route path={cart} element={<Cart />} />
      <Route path={checkout} element={<Checkout />} />
      <Route path={login} element={<Login />} />
      <Route path={signup} element={<Signup />} />
      <Route path={contact} element={<Contact />} />
    </Routes>
  );
}
