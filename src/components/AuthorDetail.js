import React from "react";
import api from "../api";

class BookDetail extends React.Component {
  state = { author: null };

  componentDidMount() {
    const authorId = this.props.match.params.id;
    api.get(`/author/${authorId}`).then((res) => {
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
      </React.Fragment>
    );
  }
}

export default BookDetail;
