import React, { Component } from "react";
import Theater from "../../components/Theater/Theater";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Showtime from "../../components/Showtime/Showtime";
import ShowtimeMovie from "../../components/ShowtimeMovie/ShowtimeMovie";

export default class Theaters extends Component {
  state = {
    theaters: [],
    isModalOpen: false,
    selectedTheater: null,
  };

  showTheaterHandler = (id) => {
    let selected = this.state.theaters.find((el) => {
      return el.id == id;
    });
    this.setState({ selectedTheater: selected, isModalOpen: true });
  };

  componentDidMount() {
    axios
      .get("https://movie-theater-api.herokuapp.com/theater/?format=json")
      .then((res) => {
        this.setState({ theaters: res.data });
      });
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    let theaters = <h4 className="mx-auto">Loading...</h4>;
    let showtime;

    if (this.state.theaters.length >= 1) {
      theaters = this.state.theaters.map((el) => {
        return (
          <Col md={4} key={el.id} className="mt-4">
            <Theater
              key={el.id}
              name={el.name}
              img={el.image_url}
              clicked={() => this.showTheaterHandler(el.id)}
            ></Theater>
          </Col>
        );
      });
    }

    if (this.state.selectedTheater != null) {
      let showtimeMovie = this.state.selectedTheater.showtime.map((el) => {
        return (
          <ShowtimeMovie
            key={el.id}
            name={el.movie.name}
            description={el.movie.description}
            img={el.movie.image_url}
            startTimes={JSON.parse(el.start_times).times}
          />
        );
      });

      showtime = (
        <Showtime
          show={this.state.isModalOpen}
          backdrop={() => this.setState({ isModalOpen: false })}
          name={this.state.selectedTheater.name}
        >
          {showtimeMovie}
        </Showtime>
      );
    }

    return (
      <React.Fragment>
        {showtime}
        <Row className="mb-4">{theaters}</Row>
      </React.Fragment>
    );
  }
}
