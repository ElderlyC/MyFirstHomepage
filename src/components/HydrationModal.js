import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";

const HydrationModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleShow();
  }, []);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hydration Levels Dangerously Low!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Time to Hydrate thyself my RN</Modal.Body>
    </Modal>
  );
};

export default HydrationModal;
