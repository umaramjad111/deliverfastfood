import React, { useState, useEffect } from "react";
import products from "../fake-data/products";
import { json, useParams } from "react-router-dom";
import Halmet from "../components/Halmet/Halmet";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import productImage from "../images/product_01.1.jpg";
import "../../styles/product-details.css";

export default function Fooddetail() {
  const initialformvalues = { name: "", email: "", message: "" };
  const [formvalues, setFormvalues] = useState({ ...initialformvalues });
  const [formError, setFormError] = useState({});
  const [issubmit, setIssubmit] = useState(false);

  // const onSubmit = (data) => {
  //   // console.log("username", data.username)
  //   // console.log("password", data.password)
  //   console.log(data);
  //   console.log(errors);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    //refresh sa bachany ky liye lgaty hain isko prevent ko
    e.preventDefault();
    setFormError(validate(formvalues));
    setIssubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.message) {
      errors.message = "Message is Required";
    }
    return errors;
  };
  const { id } = useParams();

  const [tab, setTab] = useState("desc");
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formError]);

  return (
    <Halmet title="product-details">
      <CommonSection title="Product 01" />
      <section className="p-5">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div
                className="product__images"
                onClick={() => setPreviewImg(product.image01)}
              >
                <img src={product.image01} alt="" className="w-50" />
              </div>
              <div
                className="product__images"
                onClick={() => setPreviewImg(product.image02)}
              >
                <img src={product.image02} alt="" className="w-50" />
              </div>
              <div
                className="product__images"
                onClick={() => setPreviewImg(product.image03)}
              >
                <img src={product.image03} alt="" className="w-50" />
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main__img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single__product__content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <span className="product__price">
                  Price: <span>${product.price}</span>{" "}
                </span>
                <p className="category mb-4">
                  {" "}
                  Category: <span>{product.category}</span>{" "}
                </p>
                <button className="btn add__to__cart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6 className="tab__active">Description</h6>
                <h6>Review</h6>
              </div>
              <div className="tab__content mt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque architecto iste animi porro. Quis tenetur numquam
                  ducimus facilis dicta porro illo reprehenderit molestias
                  magnam! Laboriosam ratione excepturi in soluta beatae.
                  Exercitationem, ut placeat sequi iste laborum maiores incidunt
                  laboriosam similique?
                </p>
              </div>
              <div className="tab__form mb-3">
                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">umar@gmail.com</p>
                  <p className="feedback__text">Great Product</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">umar@gmail.com</p>
                  <p className="feedback__text">Great Product</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">umar@gmail.com</p>
                  <p className="feedback__text">Great Product</p>
                </div>

                <form onSubmit={handleSubmit} className="form">
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      name="name"
                      value={formvalues.name}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red" }}>{formError.name}</p>
                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      name="email"
                      value={formvalues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red" }}>{formError.email}</p>
                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="text"
                      name="message"
                      placeholder="Enter your Message"
                      value={formvalues.message}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red" }}>{formError.message}</p>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="add__to__cart__btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Halmet>
  );
}
