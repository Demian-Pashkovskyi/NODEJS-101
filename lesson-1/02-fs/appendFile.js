import * as fs from "node:fs/promises";
import path from "node:path";

fs.appendFile(path.resolve("appendFile.txt"), "Hello frome Node.js\n")
.then(() => console.log("Done"))
.catch(error => console.error(error));