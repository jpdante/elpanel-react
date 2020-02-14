import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

class Servers extends Component {
  render() {
    return (
      <Container className="page-content">
        <h3 className="content-header">Servers</h3>
        <hr/>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Status</th>
              <th>Server Name</th>
              <th>Players</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Spinner animation="grow" variant="success" /></td>
              <td>Lobby</td>
              <td>1 / 16 Players</td>
            </tr>
            <tr>
              <td><Spinner animation="grow" variant="success" /></td>
              <td>Survival</td>
              <td>29 / 30 Players</td>
            </tr>
            <tr>
              <td><Spinner animation="grow" variant="success" /></td>
              <td>Bungecord</td>
              <td>134 / 200 Players</td>
            </tr>
            <tr>
              <td><Spinner animation="grow" variant="danger" /></td>
              <td>Factions</td>
              <td>0 / 150 Players</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Servers;