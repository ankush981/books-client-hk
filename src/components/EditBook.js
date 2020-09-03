import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import api from "../api";
import AuthorSelect from "./partials/AuthorSelect";

class EditBook extends React.Component {
  state = {
    id: null,
    name: "",
    isbn: "",
    authorId: null,
    authors: [], // all available authors
    errors: [],
    apiSuccess: false,
  };

  componentDidMount() {
    const bookId = this.props.match.params.id;
    this.setState({ ...this.state, id: bookId });

    api.getBookById(bookId).then((res) => {
      const book = res.data;
      this.setState({
        ...this.state,
        name: book.name,
        isbn: book.isbn,
        authorId: book.author.id,
      });
    });

    api.getAllAuthors().then((res) => {
      this.setState({ ...this.state, authors: res.data });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = [];

    if (!this.state.name) {
      errors.push("Book name can't be blank");
    }

    if (!this.state.isbn) {
      errors.push("ISBN can't be blank");
    }

    if (!this.state.authorId) {
      errors.push("Please select an author");
    }

    if (errors.length > 0) {
      this.setState({ ...this.state, errors });
      return;
    }

    api
      .updateBook(this.state.id, {
        name: this.state.name,
        isbn: this.state.isbn,
        authorId: this.state.authorId,
      })
      .then(() => {
        this.setState({ ...this.state, apiSuccess: true });
      });
  };

  renderErrors = () => {
    if (this.state.errors.length === 0) {
      return null;
    }

    return (
      <div className="text-danger mb-3">
        <div>
          Please fix these errors:
          <ul>
            {this.state.errors.map((message) => {
              return <li key={message}>{message}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.apiSuccess === false ? null : (
          <SweetAlert
            success
            title="Woot!"
            onConfirm={() => this.props.history.push("/")}
          >
            Book edited successfully
          </SweetAlert>
        )}
        <h3 className="pageHeading mb-3">Edit Book</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ ...this.state, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>ISBN</label>
            <input
              type="text"
              className="form-control"
              value={this.state.isbn}
              onChange={(e) =>
                this.setState({ ...this.state, isbn: e.target.value })
              }
            />
          </div>

          {this.state.authorId ? (
            <div className="form-group">
              <label>Author</label>
              <AuthorSelect
                authors={this.state.authors}
                selected={this.state.authorId}
                onChange={(id) => {
                  this.setState({ ...this.state, authorId: id });
                }}
              />
            </div>
          ) : null}

          <div className="form-group">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default EditBook;
