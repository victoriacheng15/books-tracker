const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", bookRoutes);

app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
