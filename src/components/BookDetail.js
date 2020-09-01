import React from "react";
import api from "../api";

class BookDetail extends React.Component {
  state = { book: null };

  componentDidMount() {
    const bookId = this.props.match.params.id;
    api.get(`/book/${bookId}`).then((res) => {
      this.setState({ book: res.data });
    });
  }

  renderedBookDetail = () => {
    const book = this.state.book;
    if (!book) {
      return <em>No details found. Please check if book id is valid.</em>;
    }

    return (
      <div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{book.name}</td>
            </tr>
            <tr>
              <th>ISBN</th>
              <td>{book.isbn}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{book.author.firstName + " " + book.author.lastName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="pageHeading mb-3">Book Details</h3>
        <div className="bookDetail">{this.renderedBookDetail()}</div>
      </React.Fragment>
    );
  }
}

export default BookDetail;
