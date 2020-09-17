import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Layout extends Component {
  render() {
    return (
      <Container>
        <h1 className="font-weight-bold text-center mt-5 mb-4">CinemaMax</h1>
        {this.props.children}
      </Container>
    );
  }
}
