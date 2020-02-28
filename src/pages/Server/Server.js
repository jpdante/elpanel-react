import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import api from "../../context/api";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Server extends Component {
  state = {
    server: {},
    cpu: 0,
    ram: 0,
    log: "none",
    cmd: ""
  };

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')
    this.getServer(id);
    this.interval = setInterval(() => {
      api.post("/api/getstats", { id: id })
      .then(result => {
        if(result.data.success) {
          this.setState({
            cpu: result.data.info.cpu,
            ram: result.data.info.ram,
            log: result.data.info.log,
            count: result.data.info.count,
            max: result.data.info.max,
            online: result.data.info.online
           })
        }
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    }, 1000);
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
        server: result.data.server,
        cpu: 0,
        ram: 0,
        log: "",
        count: result.data.server.count,
        max: result.data.server.max,
        online: result.data.server.online
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
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  stopServer = () => () => {
    api.post("/api/stop", { id: this.state.server.id })
    .then(result => {
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  restartServer = () => () => {
    api.post("/api/restart", { id: this.state.server.id })
    .then(result => {
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  killServer = () => () => {
    api.post("/api/kill", { id: this.state.server.id })
    .then(result => {
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  sendCommand = async e => {
    e.preventDefault();
    const result = await api.post("/api/command", { id: this.state.server.id, cmd: this.state.cmd });
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
              <td><FontAwesomeIcon icon={this.state.online ? faCheckCircle : faTimesCircle} color={this.state.online ? "#25c025" : "#ff2f2f"}/></td>
            </tr>
            <tr>
              <td className="right-content">Players:</td>
              <td>{this.state.count} / {this.state.max}</td>
            </tr>
            <tr>
              <td className="right-content">Min Memory:</td>
              <td>{this.state.server.minmemory} MB</td>
            </tr>
            <tr>
              <td className="right-content">Max Memory:</td>
              <td>{this.state.server.maxmemory} MB</td>
            </tr>
            <tr>
              <td className="right-content">Filename:</td>
              <td>{this.state.server.filename}</td>
            </tr>
            <tr>
              <td className="right-content">Arguments:</td>
              <td>{this.state.server.arguments}</td>
            </tr>
            <tr>
              <td className="right-content">Directory:</td>
              <td>{this.state.server.directory}</td>
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
        <h5 className="content-header">Console</h5>
        <hr/>
        <form onSubmit={this.sendCommand}>
        <InputGroup className="mb-3">
          <FormControl 
          placeholder="Command"
          aria-label="Command"
          aria-describedby="basic-addon2"
          name="cmd"
          id="cmd"
          onChange={e => this.setState({ cmd: e.target.value })}
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary">Send</Button>
          </InputGroup.Append>
        </InputGroup>
        </form>
        <div className="console">
          {this.state.log}
        </div>
      </Container>
    );
  }
}
 
export default Server;