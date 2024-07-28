import express from "express";

import {initDBConection} from "./db.js";

const app = express();

async function bootstrap() {
	try {
		await initDBConection();

		app.listen(8080, () => {
			console.log('Server started on port 8080');
	});
	} catch(error) {
		console.error(error);
	}
}

bootstrap();
