import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import OperatingHours from "./OperatingHours";
import Reviews from "./Reviews";

function RestView() {
  const [restView, setRestView] = useState([]);

  const restVisible = async () => {
    let result = await fetch("/restaurant.json");
    result.json().then((data) => setRestView(data.restaurants));
  };

  //oject create for useParams
  const params = useParams();
  console.log(params.id);

  const singleRest = restView.find((i) => i.id == params.id);
  console.log(singleRest);

  useEffect(() => {
    restVisible();
  }, []);

  return (
    <>
      {singleRest ? (
        <Container>
          <h1 style={{ textAlign: "center" }}>{singleRest.name}</h1>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6} className="mt-4">
              <ListGroup>
                <ListGroup.Item>
                  Location: <strong>{singleRest.location.city}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Cuisine: <strong>{singleRest.cuisine}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Delivery Availabe: {singleRest.delivery_available}
                </ListGroup.Item>
                <ListGroup.Item>
                  Payment Methods: <strong>{singleRest.payment_methods}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Rating: <strong>{singleRest.rating}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <OperatingHours workingHours={singleRest.hours} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Reviews reviewList={singleRest.reviews} />
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

export default RestView;
