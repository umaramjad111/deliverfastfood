import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryimgone from "../../../images/category-01.png";
import categoryimgtwo from "../../../images/category-02.png";
import categoryimgthree from "../../../images/category-03.png";
import categoryimgfour from "../../../images/category-04.png";
import "../../../../styles/category.css";
export default function Category() {
  const categoryData = [
    {
      display: "Fastfood",
      imgUrl: categoryimgone,
    },
    {
      display: "Pizza",
      imgUrl: categoryimgtwo,
    },
    {
      display: "Asian Food",
      imgUrl: categoryimgthree,
    },
    {
      display: "Row Meat",
      imgUrl: categoryimgfour,
    },
  ];
  return (
    <Container className="p-4">
      <Row>
        {categoryData.map((item, i) => (
          <Col lg="3" md="4" sm="6" xs="6">
            <div className="category__item d-flex align-items-center gap-3 p-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category_item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
