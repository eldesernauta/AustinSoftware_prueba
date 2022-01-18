import React from "react";
import "./Footer.scss";
import logo from "./../../logo.png";
import BackToTop from "react-back-to-top-button";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row className="footer">
        <Col className="col-12 col-md-4">
          <img src={logo} alt="logo" width="200px" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget.
          </p>
        </Col>
        <Col className="col-12 col-md-4">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <p>Montevideo, Uruguay</p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>+1 512-576-6614</p>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <p>hello@mail.com</p>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="col-12 col-md-4">
          <ul className="menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Library</li>
            <li>Locations</li>
            <li>For Companies</li>
            <li>Find your dream job</li>
          </ul>
        </Col>
      </Row>
      <Row className="copyright">
        <Col className="col-12 col-md-10">
          <p>Logo MVD 2021. All Rights Reserved.</p>
        </Col>
        <Col className="col-2 d-flex justify-content-end">
          <BackToTop
            showOnScrollUp
            showAt={1}
            speed={1500}
            easing="easeInOutQuint"
            style={{
              transform: "scale(0.5)",
              position: "fixed",
              bottom: "-40px",
            }}
          >
            <i className="fas fa-arrow-up"></i>
          </BackToTop>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
