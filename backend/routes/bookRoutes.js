const express = require("express");
const router = express.Router();
const {
	getAllBooks,
	getBook,
	addBook,
	updateBook,
	deleteBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);
router.get('/:id', getBook)
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
