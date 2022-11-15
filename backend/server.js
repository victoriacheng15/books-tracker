const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", bookRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
