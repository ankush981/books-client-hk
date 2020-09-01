import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/main.scss";

import Routes from "./routes";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container className="mt-4">
          <Row className="justify-content-sm-center">
            <Col sm={{ span: 6 }}>
              <Navigation />
              <Container>
                <Routes />
              </Container>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
