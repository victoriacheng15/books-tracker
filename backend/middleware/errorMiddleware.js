const errorHandler = (error, req, res, next) => {
	const errorStatus = error.status || 500;
	const errorMsg = error.message || "something went wrong";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMsg,
		stack: error.stack,
	});
};

module.exports = {
	errorHandler,
};
