import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("http://localhost:3001/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("http://localhost:3001/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("http://localhost:3001/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("http://localhost:3001/api/books", bookData);
  },
  findBooks: function(name) {
    return axios({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + name + "&orderBy=relevance&key=AIzaSyAt7wN2sdvRMRkEX4NeR2nivYfLm9OevPs"
    });
  }
};