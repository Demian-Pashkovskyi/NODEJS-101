import * as fs from "node:fs/promises";
import path from "node:path";

async function main() {
	const data = await fs.readFile(path.resolve("mix.txt"), {encoding: "utf8"})
	const transformedData = data.toUpperCase();
	await fs.writeFile(path.resolve("mix.txt"), transformedData);
}

main().catch(error => console.error(error));

