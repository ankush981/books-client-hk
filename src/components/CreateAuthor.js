import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import api from "../api";

class CreateAuthor extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    errors: [],
    apiSuccess: false,
  };

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
      .post("/author", {
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
            Author created successfully
          </SweetAlert>
        )}
        <h3 className="pageHeading mb-3">Create Author</h3>
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

export default CreateAuthor;
