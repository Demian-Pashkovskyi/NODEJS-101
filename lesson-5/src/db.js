import mongoose from "mongoose";

async function initDBConection () {
try {
	const DB_URI = process.env.DB_URI;

	// eslint-disable-next-line no-undef
	console.log({DB_URI});

	await mongoose.connect(DB_URI);
	console.log("Database conetion successfully");
} catch(error) {
	console.error(error);
	throw	error;
}
}

export {initDBConection};	

