import React from "react";
import style from "./Theater.module.css";
function Theater(props) {
  return (
    <div className={`card theater ${style.Theater}`} onClick={props.clicked}>
      <img
        src={props.img}
        class="card-img-top"
        alt="theater picture"
        width="370"
        height="185"
      />
      <div class="card-body">
        <h6 class="font-weight-bold text-center">{props.name}</h6>
      </div>
    </div>
  );
}

export default Theater;
