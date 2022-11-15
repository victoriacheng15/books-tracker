const Book = require("../models/bookModel");

const getAllBooks = (req, res) => {
	res.json({ message: "get all books" });
};

const addBook = (req, res) => {
	res.json({ message: "add a new book" });
};

const updateBook = (req, res) => {
	res.json({ message: `update a book: ${req.params.id}` });
};

const deleteBook = (req, res) => {
	res.json({ message: `delete a book: ${req.params.id}` });
};

module.exports = {
	getAllBooks,
	addBook,
	updateBook,
	deleteBook,
};
