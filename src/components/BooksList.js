import React from "react";
import api from "../api";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = { books: [] };

  renderedBooks = () => {
    if (this.state.books.length === 0) {
      return <em>No books available :(</em>;
    }

    return this.state.books.map((book) => {
      return (
        <div className="nameWrapper mb-1" key={book.id}>
          <Link to={`/book/${book.id}`}>
            <div className="name">{book.name}</div>
          </Link>
        </div>
      );
    });
  };

  componentDidMount() {
    api.get("/books").then((res) => {
      this.setState({ books: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="pageHeading">Available Books</h3>
        <div className="booksList mt-4">{this.renderedBooks()}</div>
      </React.Fragment>
    );
  }
}

export default Home;
