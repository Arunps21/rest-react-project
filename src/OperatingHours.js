import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function OperatingHours({ workingHours }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="text-center">
            <ListGroup.Item>Monday: <strong>{workingHours.monday}</strong></ListGroup.Item>
            <ListGroup.Item>Tuesday: <strong>{workingHours.tuesday}</strong></ListGroup.Item>
            <ListGroup.Item>Wednesday: <strong>{workingHours.wednesday}</strong></ListGroup.Item>
            <ListGroup.Item>Thursday: <strong>{workingHours.thursday}</strong></ListGroup.Item>
            <ListGroup.Item>Friday: <strong>{workingHours.friday}</strong></ListGroup.Item>
            <ListGroup.Item>Saturday: <strong>{workingHours.saturday}</strong></ListGroup.Item>
            <ListGroup.Item>Sunday: <strong>{workingHours.sunday}</strong></ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OperatingHours;
