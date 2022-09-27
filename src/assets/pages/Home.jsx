import React, { useState, useEffect } from "react";
import Halmet from "../components/Halmet/Halmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { slice } from "lodash";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import "../../styles/herosection.css";
import Category from "../components/UI/category/Category";
import "../../styles/home.css";
import featureimgone from "../images/service-01.png";
import featureimgtwo from "../images/service-02.png";
import featureimgthree from "../images/service-03.png";
import products from "../../assets/fake-data/products.js";

import foodcategoryImgone from "../images/hamburger.png";
import foodcategoryImgtwo from "../images/pizza.png";
import foodcategoryImgthree from "../images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import WhyFoodCornerImg from "../images/location.png";

export default function Home() {
  const [category, setCategory] = useState("ALL");
  const [AllProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotpizza] = useState([]);
  // const [isCompleted, setIsCompleted] = useState(false);
  // const [Index, setIndex] = useState(8);
  // const initialPosts = slice(AllProducts, 0, Index);

  // const loadMore = () => {
  //   setIndex(Index + 8);
  //   console.log(Index);
  //   if (Index >= AllProducts.length) {
  //     setIsCompleted(true);
  //   } else {
  //     setIsCompleted(false);
  //   }
  // };

  // useEffect(() => {}, [initialPosts, Index]);

  useEffect(() => {
    const filteredpizza = products.filter((item) => item.category === "Pizza");
    const slicepizza = filteredpizza.slice(0, 4);
    setHotpizza(slicepizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    } else {
      setAllProducts(
        products.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
  }, [category]);

  const imagePerRow = 8;
  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureimgone,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloreeius ad veritatis magnam quaerat",
    },
    {
      title: "Super Dine In",
      imgUrl: featureimgtwo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloreeius ad veritatis magnam quaerat",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureimgthree,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloreeius ad veritatis magnam quaerat",
    },
  ];
  // const loadmorefunc = () => {
  //   console.log("fsdfkjsflsf");
  //   let loadmorbtn = document.querySelector("#load-more");
  //   let currentitem = 8;
  //   loadmorbtn.onClick = () => {
  //     let boxes = [...document.querySelectorAll(".load-pagination")];
  //     for (var i = currentitem; i < currentitem + 8; i++) {
  //       boxes[i].style.display = "inline-block";
  //     }
  //     currentitem += 8;
  //     if (currentitem >= boxes.length) {
  //       loadmorbtn.style.display = "none";
  //     }
  //   };
  // };

  return (
    <Halmet title="Home">
      <section className="main-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <div>
                  <h5 className="mb-3">Easy way to make an Order</h5>
                  <h1 className="mb-4 hero__title">
                    {" "}
                    <span>Hungry?</span> Just wait <br /> food at
                    <span> your door</span>{" "}
                  </h1>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minima quaerat praesentium doloremque quis. Corporis sunt
                    illo maiores distinctio? Tempore voluptate eaque ipsam
                    delectus magni ducimus earum sapiente nostrum amet
                    temporibus!
                  </p>
                  <div className="hero__btns d-flex align-items-center gap-3 mt-3">
                    <button className="order__btn d-flex justify-content-between align-items-center">
                      Order Now <i class="ri-arrow-drop-right-line"></i>
                    </button>
                    <button className="all__foods__btn">
                      {" "}
                      <Link to="/foods">See All Food</Link>{" "}
                    </button>
                  </div>
                  <div className="hero__service d-flex align-items-center gap-3 mt-3">
                    <p className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="shipping__icon">
                        <i class="ri-car-fill"></i>
                      </span>
                      No Shipping Charge{" "}
                    </p>

                    <p className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="cart__secure__icon">
                        <i class="ri-shield-check-fill"></i>
                      </span>
                      100% Secure Checkout{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0 category-section">
        <Category />
      </section>
      <section className="serve-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center p-5">
              <h5 className="feature__subtitle">What We Serve</h5>
              <h2 className="feature__title">Just Sit Back At Home</h2>
              <h2 className="feature__title">
                We Will <span>Take Care</span>{" "}
              </h2>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                eius ad veritatis magnam quaerat, esse provident, pariatur id
                nisi harum optio ut ex? At autem laboriosam eius adipisci dolore
                quaerat.
              </p>
            </Col>
            {featureData.map((item, i) => (
              <Col lg="4" md="6" sm="6" key={i} className="mt-2 ">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature_img"
                    className="w-25 mb-2"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="popular-food">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Food</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "food_btn_active" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "food_btn_active" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  {" "}
                  <img src={foodcategoryImgone} alt="food_cat_img" />
                  Burger{" "}
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "food_btn_active" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  {" "}
                  <img src={foodcategoryImgtwo} alt="pizza_cat_img" />
                  Pizza{" "}
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "food_btn_active" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  {" "}
                  <img src={foodcategoryImgthree} alt="bread_cat_img" />
                  Bread{" "}
                </button>
              </div>
            </Col>
            {AllProducts?.slice(0, next)?.map((item) => (
              <Col
                className="mt-5 p-3"
                lg="3"
                md="4"
                sm="6"
                xs="6"
                key={item.id}
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="d-flex justify-content-center mt-3 mb-4">
          {next < AllProducts?.length && (
            <button className="mt-4 btn btn-danger" onClick={handleMoreImage}>
              Load more
            </button>
          )}
        </div>
      </section>
      <section className="tasty-treat-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src={WhyFoodCornerImg}
                alt="why-tasty-treat"
                className="w-100"
              />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty__treat">
                <h2 className="tasty__treat_title"> Why Tasty Treat?</h2>
                <p className="tasty-treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  nesciunt dolores dolor ut perspiciatis veritatis dignissimos
                  voluptas ipsum. Tempora, laboriosam perferendis autem porro
                  quasi nihil accusamus aperiam optio nostrum voluptatem.
                </p>
                <ListGroup>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-shield-check-fill"></i>
                      Fresh and Tasty Foods
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2">
                      <i class="ri-shield-check-fill"></i>
                      Quality Foods
                    </p>
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-shield-check-fill"></i>
                      Fresh and Tasty Foods
                    </p>
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0 hot-pizza-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center p-3">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Halmet>
  );
}
