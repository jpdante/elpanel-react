import React, { Component } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import api from "../../context/api";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
 
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

class Server extends Component {
  state = {
    server: {},
    cpu: 0,
    ram: 0
  };

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')
    this.getServer(id);
    /*this.interval = setInterval(() => {
      api.post("/api/getstats", { id: id })
      .then(result => {
        if(result.data.success) {
          this.setState({ 
            cpu: result.data.cpu,
            ram: result.data.ram
           })
        }
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    }, 2500);*/
  }

  componentWillUnmount() {
    //clearInterval(this.interval);
  }

  getServer(id) {
    if(!id) {
      const history = useHistory();
      history.push("/servers");
    }
    api.post("/api/getserver", { id: id })
    .then(result => {
      this.setState({
        server: result.data.server
      });
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  startServer = () => () => {
    api.post("/api/start", { id: this.state.server.id })
    .then(result => {
      this.setState({
        server: result.data.server
      });
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  stopServer = () => () => {
    api.post("/api/stop", { id: this.state.server.id })
    .then(result => {
      this.setState({
        server: result.data.server
      });
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  restartServer = () => () => {
    api.post("/api/restart", { id: this.state.server.id })
    .then(result => {
      this.setState({
        server: result.data.server
      });
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  killServer = () => () => {
    api.post("/api/kill", { id: this.state.server.id })
    .then(result => {
      this.setState({
        server: result.data.server
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
        <h5 className="content-header">{this.state.server.name}</h5>
        <hr/>
        <Table bordered responsive variant="dark">
          <tbody>
            <tr>
              <td className="right-content margin-btn">Options:</td>
              <td>
                <Button variant="primary" onClick={this.startServer()}>Start</Button>{' '}
                <Button variant="primary" onClick={this.stopServer()}>Stop</Button>{' '}
                <Button variant="primary" onClick={this.restartServer()}>Restart</Button>{' '}
                <Button variant="danger" onClick={this.killServer()}>Kill</Button>
              </td>
            </tr>
            <tr>
              <td className="right-content">Server Name:</td>
              <td>{this.state.server.name}</td>
            </tr>
            <tr>
              <td className="right-content">Status:</td>
              <td><FontAwesomeIcon icon={this.state.server.online ? faCheckCircle : faTimesCircle} color={this.state.server.online ? "#25c025" : "#ff2f2f"}/></td>
            </tr>
            <tr>
              <td className="right-content">Players:</td>
              <td>{this.state.server.count} / {this.state.server.max}</td>
            </tr>
            <tr>
              <td className="right-content">Min Memory:</td>
              <td>{this.state.server.minmemory}</td>
            </tr>
            <tr>
              <td className="right-content">Max Memory:</td>
              <td>{this.state.server.maxmemory}</td>
            </tr>
            <tr>
              <td className="right-content">Filename:</td>
              <td>{this.state.server.filename}</td>
            </tr>
            <tr>
              <td className="right-content">CPU Usage:</td>
              <td><ProgressBar now={this.state.cpu} label={`${this.state.cpu}%`} /></td>
            </tr>
            <tr>
              <td className="right-content">RAM Usage:</td>
              <td><ProgressBar now={this.state.ram} label={`${this.state.ram}%`} /></td>
            </tr>
          </tbody>
        </Table>
        <div className="console">
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
      </Container>
    );
  }
}
 
export default Server;