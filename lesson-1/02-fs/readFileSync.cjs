const fs = require("node:fs");
const path = require("node:path");

const data = fs.readFileSync(path.resolve("read.txt"), 	{encoding: "utf8"});

console.log(data);
