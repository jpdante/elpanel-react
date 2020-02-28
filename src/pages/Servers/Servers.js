import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import api from "../../context/api";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "./Servers.css";

class Servers extends Component {
  state = {
    servers: []
  };

  componentDidMount() {
    this.getServers();
  }
 
  getServers() {
    api.get("/api/getservers")
    .then(result => {
      this.setState({
        servers: result.data.servers
      });
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  render() {
    return (
      <Container className="page-content">
        <h3 className="content-header">Servers</h3>
        <hr/>
        <Table bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th className="status-limit">Status</th>
              <th>Server Name</th>
              <th>Players</th>
            </tr>
          </thead>
          <tbody>
            {this.state.servers.length === 0 ? (
              <tr className="clickable-row">
                <td className="center-content"></td>
                <td>Loading</td>
                <td></td>
              </tr>
            ) : (
              this.state.servers.map((server, index) => {
                return (
                  <tr className="clickable-row" key={server.id}>
                    <td className="center-content">
                      <FontAwesomeIcon icon={server.online ? faCheckCircle : faTimesCircle} color={server.online ? "#25c025" : "#ff2f2f"}/>
                    </td>
                    <td><Link to={"/server?id=" + server.id.toString()} className="server-link">{server.name}</Link></td>
                    <td>{server.count} / {server.max} Players</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default withRouter(Servers);