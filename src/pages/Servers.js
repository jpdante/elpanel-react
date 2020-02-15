import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
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
            <tr href="a">
              <td><FontAwesomeIcon icon={faCheckCircle} color="#25c025"/></td>
              <td><Link to="/server?id=1" className="server-link">Lobby</Link></td>
              <td>1 / 16 Players</td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faCheckCircle} color="#25c025"/></td>
              <td><Link to="/server?id=2" className="server-link">Survival</Link></td>
              <td>29 / 30 Players</td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faCheckCircle} color="#25c025"/></td>
              <td><Link to="/server?id=3" className="server-link">Bungeecord</Link></td>
              <td>134 / 200 Players</td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faTimesCircle} color="#ff2f2f"/></td>
              <td><Link to="/server?id=4" className="server-link">Factions</Link></td>
              <td>0 / 150 Players</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Servers;