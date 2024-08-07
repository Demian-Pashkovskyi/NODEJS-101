import "dotenv/config";

import app from "./app.js";

import {initDBConection} from "./db.js";

import { Student } from "./models/student.js";

async function bootstrap() {
	try {
		await initDBConection();
		
		const PORT = process.env.PORT || 8080;

		app.listen(8080, () => {
			console.log(`Server started on port ${PORT}`);
	});
	} catch(error) {
		console.error(error);
	}
}

bootstrap();
