const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please enter book title"],
		},
		author: {
			type: String,
			required: [true, "Please enter author name(s)"],
		},
		totalPage: {
			type: Number,
			required: [true, "Please enter total pages"],
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Book", bookSchema);
