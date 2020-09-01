import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/main.scss";

import api from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    api.get("/books").then((res) => {
      this.setState({ books: res.data });
    });
  }

  renderedBooks = () => {
    if (this.state.books.length === 0) {
      return <em>No books available :(</em>;
    }

    return this.state.books.map((book) => {
      return (
        <div className="bookNameWrapper mb-1" key={book.id}>
          <div className="bookName">{book.name}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-sm-center">
          <Col sm={{ span: 6, offset: 3 }}>
            <h3>Available Books</h3>
            <div className="booksList mt-4">{this.renderedBooks()}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
