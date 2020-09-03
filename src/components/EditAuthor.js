import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import api from "../api";

class EditAuthor extends React.Component {
  state = {
    id: null,
    firstName: "",
    lastName: "",
    errors: [],
    apiSuccess: false,
  };

  componentDidMount() {
    const authorId = this.props.match.params.id;
    this.setState({ ...this.state, id: authorId });

    api.getAuthorById(authorId).then((res) => {
      this.setState({ ...this.state, ...res.data });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = [];

    if (!this.state.firstName) {
      errors.push("First name can't be blank");
    }

    if (!this.state.lastName) {
      errors.push("Last name can't be blank");
    }

    if (errors.length > 0) {
      this.setState({ ...this.state, errors });
      return;
    }

    api
      .updateAuthor(this.state.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
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
            onConfirm={() => this.props.history.push("/authors")}
          >
            Author edited successfully
          </SweetAlert>
        )}
        <h3 className="pageHeading mb-3">Edit Author</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={(e) =>
                this.setState({ ...this.state, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={(e) =>
                this.setState({ ...this.state, lastName: e.target.value })
              }
            />
          </div>

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

export default EditAuthor;
