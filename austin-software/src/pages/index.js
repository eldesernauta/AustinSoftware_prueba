import React from "react";
import "./index.scss";
import shape from "./assets/shape.png";
import logo from "./../logo.png";
import BackToTop from "react-back-to-top-button";
import logoColor from "./assets/logo_color.png";
import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Row className="hero">
        <Col className="col-12 col-md-6">
          <h1>Contact Us</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </Col>
        <Col className="col-12 col-md-6 col-shape">
          <img src={shape} alt="shape" className="shape" />
        </Col>
      </Row>
      <Row className="form">
        <Col className="col-12 col-md-6">
          <img src={logoColor} alt="logo" width="200px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
            lectus bibendum, convallis turpis vitae, interdum dui. Nulla
            pharetra neque quis magna pharetra, sit amet lobortis sem semper.
            Maecenas vel justo sagittis, facilisis eros eget, cursus orci. In
            facilisis diam.
          </p>
          <hr />
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
          <img src={shape} alt="shape" className="shape" />
          <ul className="social-media">
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
            <li>
              <i className="fab fa-whatsapp"></i>
            </li>
          </ul>
        </Col>
        <Col className="col-12 col-md-6 form-col">
          <Form className="formulario">
            <div className="form-group">
              <label for="name">
                Hello! My Name is <span>*</span>
              </label>
              <input type="name" className="form-control" id="name"></input>
            </div>
            <div className="form-group">
              <label for="email">
                My Email Address is <span>*</span>
              </label>
              <input type="name" className="form-control" id="name"></input>
            </div>
            <div className="form-group">
              <label for="phone">
                My Phone Number is <span>*</span>
              </label>
              <input type="phone" className="form-control" id="phone"></input>
            </div>
            <div className="form-group">
              <label for="message">
                My Message <span>*</span>
              </label>
              <textarea className="form-control" id="message"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-submit">
                Contact Us
              </button>
            </div>
          </Form>
        </Col>
      </Row>
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
        <Col className="col-10">
          <p>Logo MVD 2021. All Rights Reserved.</p>
        </Col>
        <Col className="col-2 d-flex justify-content-end">
          <BackToTop
            showOnScrollUp
            showAt={1}
            speed={1500}
            easing="easeInOutQuint"

            style={{transform: 'scale(0.5)', position: 'fixed', bottom: '-40px',}}
          >
            <i className="fas fa-arrow-up"></i>
          </BackToTop>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
