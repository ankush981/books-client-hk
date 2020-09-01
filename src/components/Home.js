import React from "react";
import api from "../api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
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
