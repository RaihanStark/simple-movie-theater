import React from "react";
import { Modal } from "react-bootstrap";
function Showtime(props) {
  return (
    <Modal show={props.show} size="xl" onHide={props.backdrop}>
      <Modal.Body className="mx-3 mb-3">
        <h2 className="text-center my-5" style={{ fontWeight: 800 }}>
          {props.name}
        </h2>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default Showtime;
