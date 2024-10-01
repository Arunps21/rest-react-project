import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Restaurant.css";
import { Link } from "react-router-dom";

function Restaurant() {
  const [restaurantList, setRestaurantList] = useState([]);

  // Fetch restaurant data from the JSON file
  const getData = async () => {
    try {
      const result = await fetch("/restaurant.json");
      const data = await result.json();
      setRestaurantList(data.restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        Restaurant Names
      </h2>
      <Row className="ms-5">
        {restaurantList.map((rest) => (
          <Col id="c1" className="p-2" lg={4} md={6} key={rest.id}>
            <Link
              to={`/RestView/${rest.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="mt-5 ms-5" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "200px" }}
                  src={rest.image}
                  alt={rest.name}
                />
                <Card.Body>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text>{`Address: ${rest.location.address}`}</Card.Text>
                  <Card.Text>{`Phone: ${rest.contact.phone}`}</Card.Text>
                </Card.Body>
              </Card>
            </Link>{" "}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Restaurant;
