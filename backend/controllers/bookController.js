const Book = require("../models/bookModel");

// @desc get all books
// @route  GET /api/books
// @access private
const getAllBooks = async (req, res) => {
	const books = await Book.find();
	res.status(200).json(books);
};

// @desc add a new book
// @route POST /api/books
// @access private
const addBook = async (req, res) => {
	const { title, author, totalPage } = req.body;

	if (!title || !author || !totalPage) {
		res.status(400);
		throw new Error("please enter title, author and totalPage");
	}

	const result = {
		title: title,
		author: author,
		totalPage: totalPage,
	};

	const foundBook = await Book.findOne({ title: title }).exec();
	if (!foundBook) {
		const book = await Book.create(result);
		res.status(200).json(book);
		return;
	}

	res.status(200).json({ message: "the book is existed" });
};

// @desc update a book
// @route PUT /api/books/:id
// @access private
const updateBook = async (req, res) => {
	const book = await Book.findById(req.params.id);

	if (!book) {
		res.status(400);
		throw new Error("The book doesn't exist");
	}

	const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedBook);
};

// @desc delate a book
// @route delate /api/books/:id
// @access private
const deleteBook = async (req, res) => {
	const book = await Book.findByIdAndRemove(req.params.id);

	if (!book) {
		res.status(400);
		throw new Error("The book doesn't exist");
	}

	res.status(200).json(book);
};

module.exports = {
	getAllBooks,
	addBook,
	updateBook,
	deleteBook,
};
