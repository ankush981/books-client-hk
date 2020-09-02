import React from "react";

// reusable component - renders a drop down with provided authors
const AuthorSelect = ({ authors, onChange, selected }) => {
  return (
    <select
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
      value={selected}
    >
      <option value={null}>Please select an author</option>
      {authors.map((author) => {
        return (
          <option
            key={author.id}
            value={author.id}
          >{`${author.firstName} ${author.lastName}`}</option>
        );
      })}
    </select>
  );
};

export default AuthorSelect;
