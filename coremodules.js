const path = require("path");

const filename = path.join(__filename);
const basename = path.basename(filename);

console.log("path", path);
console.log("filename", filename);
console.log("basename", basename);
