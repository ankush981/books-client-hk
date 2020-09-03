import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import api from "../api";
import AuthorSelect from "./partials/AuthorSelect";

class CreateAuthor extends React.Component {
  state = {
    name: "",
    isbn: "",
    author: null,
    allAuthors: [],
    errors: [],
    apiSuccess: false,
  };

  componentDidMount() {
    api.getAllAuthors().then((res) => {
      this.setState({ ...this.state, allAuthors: res.data });
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

    if (!this.state.author) {
      errors.push("Please assign an author");
    }

    if (errors.length > 0) {
      this.setState({ ...this.state, errors });
      return;
    }

    api
      .createBook({
        name: this.state.name,
        isbn: this.state.isbn,
        author: this.state.author,
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
            Book created successfully
          </SweetAlert>
        )}
        <h3 className="pageHeading mb-3">Create Book</h3>
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

          <div className="form-group">
            <label>Author</label>
            <AuthorSelect
              authors={this.state.allAuthors}
              onChange={(id) => this.setState({ ...this.state, author: id })}
            />
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateAuthor;
