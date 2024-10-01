import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/thumbnails/026/990/473/small/single-continuous-line-drawing-of-stylized-man-chef-serving-food-for-restaurant-logo-label-food-cafe-mascot-concept-modern-one-line-draw-design-graphic-illustration-for-food-delivery-service-png.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
           <strong>Restaurant App</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
