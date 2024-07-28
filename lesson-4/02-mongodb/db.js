import mongoose from "mongoose";

async function initDBConection () {
try {
	const DB_URL = `mongodb+srv://skyangely4:VFvf1230@cluster0.xpbw8rr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

	await mongoose.connect(DB_URL);
	console.log("Database conetion successfully");
} catch(error) {
	console.error(error);
	throw	error;
}
}

export {initDBConection};	