import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../images/res-logo.png";
import "../../../styles/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Food Corner</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time__list">
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time__list">
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <p>Model Town Lahore</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>Phone: 47239487242</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>Email: abc@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email here" />
              <span>
                <i class="ri-send-plane-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg="6" md="6">
            <p className="copyright__text"> Copy Right @2022</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-3 justify-content-end">
              <p className="m-0">Follow:</p>
              <Link>
                <span>
                  <i class="ri-facebook-fill"></i>
                </span>
              </Link>
              <Link>
                <span>
                  <i class="ri-github-line"></i>
                </span>
              </Link>
              <Link>
                <span>
                  <i class="ri-youtube-fill"></i>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
