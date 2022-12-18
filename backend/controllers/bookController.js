const Book = require("../models/bookModel");

// @desc get all books
// @route  GET /api/books
// @access private
const getAllBooks = async (req, res, next) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (error) {
		next(error);
	}
};

// @desc get all books
// @route  GET /api/books
// @access private

const getBook = async (req, res, next) => {
	try {
		const book = await Book.findById(req.params.id);
		res.status(200).json(book);
	} catch (error) {
		next(error);
	}
};

// @desc add a new book
// @route POST /api/books
// @access private
const addBook = async (req, res, next) => {
	const newBook = new Book(req.body);

	try {
		const savedBook = await newBook.save();
		res.status(200).json(savedBook);
	} catch (error) {
		next(error);
	}
};

// @desc update a book
// @route PUT /api/books/:id
// @access private
const updateBook = async (req, res, next) => {
	try {
		const updatedBook = await Book.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			},
		);

		res.status(200).json(updatedBook);
	} catch (error) {
		next(error);
	}
};

// @desc delate a book
// @route delate /api/books/:id
// @access private
const deleteBook = async (req, res, next) => {
	try {
		await Book.findByIdAndRemove(req.params.id);
		res.status(200).json("The book is deleted");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllBooks,
	getBook,
	addBook,
	updateBook,
	deleteBook,
};
