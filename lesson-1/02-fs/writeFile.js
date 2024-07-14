import * as fs from "node:fs/promises";
import path from "node:path";

fs.writeFile(path.resolve("write.txt"), "Hello frome Node.js")
.then(() => console.log("Done"))
.catch(error => console.error(error));