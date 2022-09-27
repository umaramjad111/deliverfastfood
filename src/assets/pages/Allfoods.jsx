import React, { useState, useEffect } from "react";
import Halmet from "../components/Halmet/Halmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../../styles/all-foods.css";
import "../../styles/pagination.css";
import ReactPaginate from "react-paginate";
export default function Allfoods() {
  const [searchItem, setSearchItem] = useState("");
  // const [productData, setProductData] = useState(products);
  const searchProduct = products.filter((item) => {
    if (searchItem.value === "") return item;
    if (item.title.toLowerCase().includes(searchItem.toLowerCase()))
      return item;
  });
  //pagination work
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //pagination finish

  return (
    <Halmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" className="mb-3 mt-4">
              <div className="search__widget d-flex justify-content-between align-items-center w-50">
                <input
                  type="text"
                  placeholder="I am looking for...."
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-3 mt-4">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage
              // .filter((item) => {
              //   if (searchItem.value === "") return item;
              //   if (item.title.toLowerCase().includes(searchItem.toLowerCase()))
              //     return item;
              // })
              .map((item) => (
                <Col lg="3" md="4" sm="6" className="p-2" xs="6" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Halmet>
  );
}
