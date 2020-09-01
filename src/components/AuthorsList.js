import React from "react";
import { Link } from "react-router-dom";

import api from "../api";

class Home extends React.Component {
  state = { authors: [] };

  renderedAuthors = () => {
    if (this.state.authors.length === 0) {
      return <em>No authors available :(</em>;
    }

    return this.state.authors.map((author) => {
      return (
        <div className="nameWrapper mb-1" key={author.id}>
          <Link to={`/author/${author.id}`}>
            <div className="name">
              {`${author.firstName} ${author.lastName}`}
            </div>
          </Link>
        </div>
      );
    });
  };

  componentDidMount() {
    api.get("/authors").then((res) => {
      this.setState({ authors: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="pageHeading">Available Authors</h3>
        <div className="booksList mt-4">{this.renderedAuthors()}</div>
      </React.Fragment>
    );
  }
}

export default Home;
