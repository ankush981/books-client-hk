import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-sm-center">App</Row>
      </Container>
    );
  }
}

export default App;
