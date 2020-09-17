import React from "react";
import { Card } from "react-bootstrap";
import style from "./ShowtimeMovie.module.css";

function ShowtimeMovie(props) {
  let times = props.startTimes.map((el) => {
    return <button class="showtime-button mt-2 mr-0 mr-lg-4">{el}</button>;
  });

  return (
    <Card className={style.ShowtimeMovie}>
      <Card.Body className="m-4 p-0">
        <div className="detail d-flex flex-column flex-lg-row">
          <img
            src={props.img}
            style={{ maxHeight: "140px" }}
            className="img-detail mb-4 mb-lg-0"
          ></img>
          <div class="ml-3 detail-description">
            <h5 class="font-weight-bold">{props.name}</h5>
            <p>{props.description}</p>
          </div>
        </div>
        <div class="showtime mt-4 d-flex flex-column flex-lg-row">{times}</div>
      </Card.Body>
    </Card>
  );
}

export default ShowtimeMovie;
