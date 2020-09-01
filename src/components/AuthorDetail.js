import React from "react";
import api from "../api";
import { Link } from "react-router-dom";

class BookDetail extends React.Component {
  state = { author: null };

  componentDidMount() {
    this.authorId = this.props.match.params.id;
    api.get(`/author/${this.authorId}`).then((res) => {
      this.setState({ author: res.data });
    });
  }

  renderedAuthorDetail = () => {
    const author = this.state.author;
    if (!author) {
      return <em>No details found. Please check if author id is valid.</em>;
    }

    return (
      <div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{author.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{author.lastName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="pageHeading mb-3">Author Details</h3>
        <div>{this.renderedAuthorDetail()}</div>
        <Link to={`/author/${this.authorId}/edit`}>
          <button className="btn btn-secondary btn-outline mt-2">
            Edit this author
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default BookDetail;
