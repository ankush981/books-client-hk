import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const getAllBooks = () => {
  return api.get("/books");
};

const getBookById = (id) => {
  return api.get(`/book/${id}`);
};

const createBook = (book) => {
  return api.post("/book", { ...book });
};

const updateBook = (id, details) => {
  return api.put(`/book/${id}`, {
    name: details.name,
    isbn: details.isbn,
    author: details.authorId,
  });
};

const getAllAuthors = () => {
  return api.get("/authors");
};

const getAuthorById = (id) => {
  return api.get(`/author/${id}`);
};

const createAuthor = (author) => {
  return api.post("/author", { ...author });
};

const updateAuthor = (id, details) => {
  return api.put(`/author/${id}`, {
    firstName: details.firstName,
    lastName: details.lastName,
  });
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
};
