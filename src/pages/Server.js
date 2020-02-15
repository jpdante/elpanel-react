import React, { Component } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
 
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

class Server extends Component {
  render() {
    return (
      <Container className="page-content">
        <QueryParamsComp />
      </Container>
    );
  }
}

function QueryParamsComp() {
  let query = useQuery();
  return (
    <ServerContent id={query.get("id")}/>
  );
}

function ServerContent({ id }) {
  if(!id) {
    GoServers();
    return (
      <div />
    );
  }
  return (
    <div>
      {id ? (
        <h3>
          The <code>name</code> in the query string is &quot;{id}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

function GoServers() {
  const history = useHistory();
  history.push("/");
}
 
export default Server;